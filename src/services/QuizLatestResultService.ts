// src/services/quizLatestResultService.ts
const API_URL = import.meta.env.VITE_AN_API_URL;
const AI_API_URL = import.meta.env.VITE_AI_API_URL;

export interface QuizResult {
    mbti: string;
    holland: string;
    success: boolean;
  }
  
  export const getQuizLatestResult = async (userId: number | null): Promise<QuizResult | null> => {
    if (userId === null) {
      throw new Error('User ID is null');
    }
  
    try {
      const response = await fetch(`${API_URL}/api/quizzes/quiz-result/latest/${userId}`);
      const data = await response.json();
      if (data.success) {
        return {
          mbti: data.mbti?.result.trim() || '',
          holland: data.holland?.result.trim() || '',
          success: true,
        };
      }
      return null;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Lỗi khi tải dữ liệu MBTI/Holland: ${error.message}`);
      } else {
        throw new Error('Lỗi không xác định khi tải dữ liệu MBTI/Holland');
      }
    }
  };
  
  export interface CareerFormPayload {
    mbti: string;
    holland: string;
    skills: string;
    interests: string;
  }
  
  export interface CareerFormResult {
    skills: string;
    interests: string;
    suggestion: string;
  }
  
  export const submitCareerForm = async (
    userId: number | null,
    formData: CareerFormPayload
  ): Promise<CareerFormResult | null> => {
    if (userId === null) {
      throw new Error('User ID is null');
    }
  
    try {
      const quizData = await getQuizLatestResult(userId);
      if (!quizData) {
        throw new Error('Không tìm thấy kết quả MBTI/Holland.');
      }
  
      const payload = {
        mbti: quizData.mbti,
        holland: quizData.holland,
        skills: formData.skills.trim(),
        interests: formData.interests.trim(),
      };
  
      const response = await fetch(`${AI_API_URL}/career-result`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Phân tích thất bại: ${text}`);
      }
  
      return response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Lỗi khi gửi hoặc nhận dữ liệu: ${error.message}`);
      } else {
        throw new Error('Lỗi không xác định khi gửi hoặc nhận dữ liệu!');
      }
    }
  };
  
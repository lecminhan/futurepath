// src/services/careerService.ts
const API_URL = import.meta.env.VITE_AI_API_URL;

export interface CareerRequest {
    mbti: string;
    holland: string;
    skills: string;
    interests: string;
  }
  
  export interface CareerResponse {
    jobs: string[];
    message?: string;
  }
  
  export const fetchCareerSuggestion = async (
    data: CareerRequest
  ): Promise<CareerResponse> => {
    try {
      const response = await fetch(`${API_URL}/career-result`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch career suggestions');
      }
  
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      return { jobs: [], message: 'Đã xảy ra lỗi khi gọi API.' };
    }
  };
  
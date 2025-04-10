import { MBTIStrengthsData } from './../Data/mbtiData/mbtiStrengthsData';
import { MBTIJobsData } from '../Data/mbtiData/mbtiJobsData';
import { MBTIOverviewData } from '../Data/mbtiData/mbtiOverviewData';
import { MBTIWeaknessesData } from '../Data/mbtiData/mbtiWeaknessesData';
import { MBTIIntros } from '../Data/mbtiData/mbtiIntroData';
import { MBTINames } from '../Data/mbtiData/mbtiNameData';
import { MBTIRelationships } from '../Data/mbtiData/mbtiRelationshipData';
import { MBTIAdviceData } from '../Data/mbtiData/mbtiAdviceData';
export interface MBTIScores {
  E_score: number;
  I_score: number;
  S_score: number;
  N_score: number;
  T_score: number;
  F_score: number;
  J_score: number;
  P_score: number;
  result: string;
}

export function calculateMBTI(answers: Record<number, { answer: string; category: string; selectedOption: string }>): MBTIScores {
  const scores: MBTIScores = {
    E_score: 0,
    I_score: 0,
    S_score: 0,
    N_score: 0,
    T_score: 0,
    F_score: 0,
    J_score: 0,
    P_score: 0,
    result: ''
  };

  // Đếm số lần chọn cho mỗi category và selectedOption
  Object.values(answers).forEach(({ answer, category, selectedOption }) => {
    // Xử lý từng category và tính điểm cho từng lựa chọn
    switch (category) {
      case 'E/I':
        if (selectedOption === 'Option 1') {
          if (answer === 'E') scores.E_score++;
          else scores.I_score++;
        } else {
          if (answer === 'I') scores.I_score++;
          else scores.E_score++;
        }
        break;
      case 'S/N':
        if (selectedOption === 'Option 1') {
          if (answer === 'S') scores.S_score++;
          else scores.N_score++;
        } else {
          if (answer === 'N') scores.N_score++;
          else scores.S_score++;
        }
        break;
      case 'T/F':
        if (selectedOption === 'Option 1') {
          if (answer === 'T') scores.T_score++;
          else scores.F_score++;
        } else {
          if (answer === 'F') scores.F_score++;
          else scores.T_score++;
        }
        break;
      case 'J/P':
        if (selectedOption === 'Option 1') {
          if (answer === 'J') scores.J_score++;
          else scores.P_score++;
        } else {
          if (answer === 'P') scores.P_score++;
          else scores.J_score++;
        }
        break;
      default:
        break;
    }
  });

  // Xác định kết quả cuối cùng dựa trên số lần chọn trong mỗi category
  scores.result = calculateResult(scores); // Tính kết quả MBTI cuối cùng từ scores

  return scores;
}

export function calculateResult(scores: MBTIScores): string {
  return (scores.E_score > scores.I_score ? 'E' : 'I') + (scores.S_score > scores.N_score ? 'S' : 'N') + (scores.T_score > scores.F_score ? 'T' : 'F') + (scores.J_score > scores.P_score ? 'J' : 'P');
}

export interface MBTIOverview {
  overview: string;
  description: string;
}

// Hàm lấy overview từ MBTIOverviewData
export function getMBTIOverview(type: string): MBTIOverview[] {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về danh sách overview hoặc mảng rỗng nếu không tìm thấy nhóm tính cách
  return MBTIOverviewData[typeUpperCase] || [];
}

export interface Strength {
  name: string;
  description: string;
}

// Hàm lấy sức mạnh từ MBTIStrengthsData
export function getMBTIStrengths(type: string): Strength[] {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về danh sách sức mạnh hoặc mảng rỗng nếu không tìm thấy nhóm tính cách
  return MBTIStrengthsData[typeUpperCase] || [];
}

export interface Weaknesses {
  name: string;
  description: string;
}

// Hàm lấy điểm yếu từ MBTIWeaknessesData
export function getMBTIWeaknesses(type: string): Weaknesses[] {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về danh sách điểm yếu hoặc mảng rỗng nếu không tìm thấy nhóm tính cách
  return MBTIWeaknessesData[typeUpperCase] || [];
}

// utils/mbtiNames.ts

// Hàm lấy giới thiệu MBTI từ MBTIIntros
export function getMBTIIntro(type: string): string {
  return MBTIIntros[type.toUpperCase()] || '';
}

// Hàm lấy tên MBTI từ MBNames
export function getMBTIName(type: string): string {
  return MBTINames[type.toUpperCase()] || type;
}

export interface Job {
  title: string;
  description: string;
}

// Hàm lấy công việc từ MBTIJobsData
export function getMBTIJobs(type: string): Job[] {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về danh sách công việc hoặc mảng rỗng nếu không tìm thấy nhóm tính cách
  return MBTIJobsData[typeUpperCase] || [];
}
// Hàm lấy thông tin mối quan hệ cho kiểu MBTI
export function getMBTIRelationships(type: string) {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về thông tin mối quan hệ cho kiểu MBTI, hoặc null nếu không tìm thấy nhóm tính cách
  return MBTIRelationships[typeUpperCase] || null;
}
// utils/mbtiUtils.ts

export function getMBTIAdvice(type: string) {
  const typeUpperCase = type.toUpperCase(); // Chuyển đổi nhóm tính cách thành chữ hoa

  // Trả về thông tin mối quan hệ cho kiểu MBTI, hoặc null nếu không tìm thấy nhóm tính cách
  return MBTIAdviceData[typeUpperCase] || null;
}
// utils/mbtiColors.ts

// utils/mbtiUtils.ts

export const MBTICustomGradients: Record<string, string> = {
  ENFJ: 'linear-gradient(45deg, #e6a5ea, #f0d5b2)',
  ENFP: 'linear-gradient(45deg, #f5a5d1, #f0f5b2)',
  ENTJ: 'linear-gradient(45deg, #a5e6ea, #b2f0e6)',
  ENTP: 'linear-gradient(45deg, #ea5aa5, #f0b2d5)',
  ESFJ: 'linear-gradient(45deg, #a5f0e6, #b2f0a5)',
  ESFP: 'linear-gradient(45deg, #f5e6a5, #f0d5b2)',
  ESTJ: 'linear-gradient(45deg, #b2a5f0, #a5f0e6)',
  ESTP: 'linear-gradient(45deg, #f0b2f5, #a5f0f0)',
  INFJ: 'linear-gradient(45deg, #e6b2a5, #f0d5b2)',
  INFP: 'linear-gradient(45deg, #f0b2f5, #a5a5f0)',
  INTJ: 'linear-gradient(45deg, #f0e6a5, #b2d5f0)',
  INTP: 'linear-gradient(45deg, #b2a5f0, #a5f0f0)',
  ISFJ: 'linear-gradient(45deg, #a5d5f0, #f0e6a5)',
  ISFP: 'linear-gradient(45deg, #d5a5f0, #f0d5a5)',
  ISTJ: 'linear-gradient(45deg, #f5b2e6, #f0a5b2)',
  ISTP: 'linear-gradient(45deg, #a5f0b2, #f0d5f0)'
};

export function getMBTIGradient(type: string): string {
  return MBTICustomGradients[type.toUpperCase()] || '';
}

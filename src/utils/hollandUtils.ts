import hollandDescriptions from '../Data/hollandData.ts/hollanDescription';
import hollandStrengths from '../Data/hollandData.ts/hollandStrengths';
import hollandJobs from '../Data/hollandData.ts/hollandJob';
import hollandAdvices from '../Data/hollandData.ts/hollandAdvice';
import hollandPairOverviews from '../Data/hollandData.ts/hollandOverview';
import hollandPairSummaries from '../Data/hollandData.ts/hollandPairSumaries';
import hollandWeaknesses from '../Data/hollandData.ts/hollandWeaknesses';
import hollandPairAdvices from '../Data/hollandData.ts/hollandPairAdvice';
import hollandNames from '../Data/hollandData.ts/hollandName';
export const getHollandDescriptions = (
  code: string
): {
  type: string;
  description: string;
  subtypes: { name: string; description: string }[];
}[] => {
  return code
    .toUpperCase()
    .split('')
    .map((type) => {
      const data = hollandDescriptions[type];
      if (!data) {
        return {
          type,
          description: 'Không tìm thấy mô tả.',
          subtypes: []
        };
      }

      return {
        type,
        description: data.description,
        subtypes: Object.entries(data.subtypes).map(([name, desc]) => ({
          name,
          description: desc
        }))
      };
    });
};
export const getHollandStrengths = (code: string): { title: string; description: string }[] => {
  const types = code.split('');
  return types.flatMap((type) => hollandStrengths[type] || []);
};
export const getHollandJobs = (code: string): { title: string; reason: string }[] => {
  const types = code.split('');
  return types.flatMap((type) => hollandJobs[type] || []);
};

export const getHollandAdvices = (code: string): { title: string; description: string }[] => {
  const types = code.split('');
  return types.flatMap((type) => hollandAdvices[type] || []);
};

export const getHollandPairOverview = (code: string): string | undefined => {
  const normalized = normalizeHollandPair(code);
  return normalized ? hollandPairOverviews[normalized] : undefined;
};

export const getHollandPairSummary = (code: string): string | undefined => {
  const normalized = normalizeHollandPair(code);
  return normalized ? hollandPairSummaries[normalized] : undefined;
};

export const getHollandWeaknesses = (code: string): { title: string; description: string }[] => {
  const types = code.split('');
  return types.flatMap((type) => hollandWeaknesses[type] || []);
};
export const getHollandPairAdvice = (code: string): string | null => {
  const pairCode = code.length >= 2 ? code.substring(0, 2).toUpperCase() : '';
  return hollandPairAdvices[pairCode] || null;
};
export interface HollandScores {
  E_score: number;
  I_score: number;
  S_score: number;
  N_score: number;
  T_score: number;
  F_score: number;
  J_score: number;
  P_score: number;
  R_score: number;
  I_score_h: number;
  A_score_h: number;
  S_score_h: number;
  E_score_h: number;
  C_score_h: number;
  result: string;
}

export function calculateHolland(answers: Record<number, { answer: string; category: string; selectedOption: string }>): HollandScores {
  const scores: HollandScores = {
    E_score: 0,
    I_score: 0,
    S_score: 0,
    N_score: 0,
    T_score: 0,
    F_score: 0,
    J_score: 0,
    P_score: 0,
    R_score: 0,
    I_score_h: 0,
    A_score_h: 0,
    S_score_h: 0,
    E_score_h: 0,
    C_score_h: 0,
    result: ''
  };

  // Tính điểm cho Holland categories
  Object.values(answers).forEach(({ category, selectedOption }) => {
    const [option1, option2] = category.split('/');

    let selectedCategory = '';
    if (selectedOption === 'Option 1') {
      selectedCategory = option1;
    } else if (selectedOption === 'Option 2') {
      selectedCategory = option2;
    }

    switch (selectedCategory) {
      case 'R':
        scores.R_score++;
        break;
      case 'I':
        scores.I_score_h++;
        break;
      case 'A':
        scores.A_score_h++;
        break;
      case 'S':
        scores.S_score_h++;
        break;
      case 'E':
        scores.E_score_h++;
        break;
      case 'C':
        scores.C_score_h++;
        break;
    }
  });

  // Tạo kết quả mã Holland từ 2 nhóm cao điểm nhất
  const resultCode = Object.entries({
    R: scores.R_score,
    I: scores.I_score_h,
    A: scores.A_score_h,
    S: scores.S_score_h,
    E: scores.E_score_h,
    C: scores.C_score_h
  })
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([key]) => key)
    .join('');

  scores.result = resultCode;
  return scores;
}

const allowedHollandPairs = new Set(['RI', 'RA', 'RS', 'RE', 'RC', 'IA', 'IS', 'IE', 'IC', 'AS', 'AE', 'AC', 'SE', 'SC', 'EC']);

export const normalizeHollandPair = (code: string): string | undefined => {
  const upper = code.toUpperCase();
  const a = upper[0],
    b = upper[1];
  if (allowedHollandPairs.has(upper)) return upper;
  if (allowedHollandPairs.has(b + a)) return b + a;
  return undefined;
};
export const getHollandInfo = (code: string): { alias: string; tagline: string } => {
  const normalized = code.toUpperCase();
  return hollandNames[normalized] || { alias: 'Chưa xác định', tagline: '' };
};
const hollandGradients: Record<string, string> = {
  AC: 'linear-gradient(135deg, #9CB4CC, #E6DADA)',
  AE: 'linear-gradient(135deg, #C36A6A, #FFE3E3)',
  AS: 'linear-gradient(135deg, #D76D77, #FFAF7B)',
  EC: 'linear-gradient(135deg, #BA8B02, #181818)',
  IA: 'linear-gradient(135deg, #00B4DB, #0083B0)',
  IC: 'linear-gradient(135deg, #757F9A, #D7DDE8)',
  IE: 'linear-gradient(135deg, #e96443, #904e95)',
  IS: 'linear-gradient(135deg, #DECBA4, #3E5151)',
  RA: 'linear-gradient(135deg, #B24592, #F15F79)',
  RC: 'linear-gradient(135deg, #B79891, #94716B)',
  RE: 'linear-gradient(135deg, #FF4E50, #F9D423)',
  RI: 'linear-gradient(135deg, #403B4A, #E7E9BB)',
  RS: 'linear-gradient(135deg, #C33764, #1D2671)',
  SC: 'linear-gradient(135deg, #C9D6FF, #E2E2E2)',
  SE: 'linear-gradient(135deg, #FF512F, #DD2476)'
};

export const getHollandGradient = (code: string): string => {
  const normalized = code.toUpperCase();
  return hollandGradients[normalized] || 'linear-gradient(135deg, #CCCCCC, #EEEEEE)';
};

export default hollandGradients;

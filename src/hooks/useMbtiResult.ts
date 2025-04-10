import { useEffect, useState } from 'react';
import { calculateMBTI, MBTIScores } from '../utils/mbtiUtils';
import { sendResultsToAPI } from '../services/quizzResultMbtiService';

export const useMBTIResult = (answers: Record<number, { answer: string; category: string; selectedOption: string }>) => {
  const [scores, setScores] = useState<MBTIScores | null>(null);

  useEffect(() => {
    const result = calculateMBTI(answers);
    setScores(result);
  }, [answers]);

  useEffect(() => {
    if (scores) {
      sendResultsToAPI(scores).catch(console.error);
    }
  }, [scores]);

  return scores;
};

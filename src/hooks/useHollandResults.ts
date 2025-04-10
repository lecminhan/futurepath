import { useEffect, useState } from 'react';
import { calculateHolland, HollandScores } from '../utils/hollandUtils';
import { sendHollandResultsToAPI } from '../services/quizzResultHollandServices';

export const useHollandResult = (answers: Record<number, { answer: string; category: string; selectedOption: string }>) => {
  const [scores, setScores] = useState<HollandScores | null>(null);

  useEffect(() => {
    const result = calculateHolland(answers);
    setScores(result);
  }, [answers]);

  useEffect(() => {
    if (scores) {
      sendHollandResultsToAPI(scores).catch(console.error);
    }
  }, [scores]);

  return scores;
};

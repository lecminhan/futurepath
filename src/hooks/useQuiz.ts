// src/hooks/useQuiz.ts
import { useEffect, useState } from 'react';
import { fetchQuizData } from '../services/QuizServices';

interface QuizData {
  quiz_id: number;
  quiz_type: string;
  content: string;
  option1: string;
  option2: string;
  category: string;
}

const useQuiz = () => {
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } finally {
        setLoading(false);
      }
    };

    getQuizData();
  }, []);

  return { quizData, loading };
};

export default useQuiz;

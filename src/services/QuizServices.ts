// src/services/quizService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3004/api/quizzes/question';

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};

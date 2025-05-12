// src/services/quizService.ts
import axios from 'axios';
const API_URL = import.meta.env.VITE_AN_API_URL;
export const fetchQuizData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/quizzes/question`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};

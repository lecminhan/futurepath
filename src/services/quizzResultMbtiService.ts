// services/mbtiService.ts
import { MBTIScores } from '../utils/mbtiUtils';
import { getUserId } from '../utils/useridUtils';

export async function sendResultsToAPI(scores: MBTIScores) {
  const userId = getUserId();
  const quizId = 1;
const API_URL = import.meta.env.VITE_AN_API_URL;

  if (!userId) throw new Error('User ID không tồn tại');

  const requestData = {
    user_id: userId,
    quiz_id: quizId,
    ...scores
  };
  console.log('[📤 POST] Holland Payload:', requestData);
  const response = await fetch(`${API_URL}/api/quizzes/results`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  });

  const result = await response.json();

  if (!response.ok) {
    const errorMessage = result.message || `HTTP error! status: ${response.status}`;
    throw new Error(errorMessage);
  }

  return result;
}

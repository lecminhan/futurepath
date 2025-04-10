import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

export const useAuth = () => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      await register(username, email, password);
      navigate('/login');
    } catch (err: unknown) {
      // Xác định kiểu cho error
      let errorMessage = 'An unknown error occurred';

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      } else if (err && typeof err === 'object' && 'message' in err) {
        errorMessage = (err as { message: string }).message;
      }

      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRegister, error, isLoading };
};

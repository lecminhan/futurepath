import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthTimeout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthTimeout = () => {
      const expiresAt = localStorage.getItem('expiresAt');
      if (!expiresAt) return;

      const remainingTime = Number(expiresAt) - new Date().getTime();

      if (remainingTime < 0) {
        // Token đã hết hạn
        localStorage.removeItem('authToken');
        localStorage.removeItem('expiresAt');
        localStorage.removeItem('user');
        navigate('/login');
      } else {
        // Đặt timeout để tự động đăng xuất khi token hết hạn
        const timeout = setTimeout(() => {
          localStorage.removeItem('authToken');
          localStorage.removeItem('expiresAt');
          localStorage.removeItem('user');
          navigate('/login');
        }, remainingTime);

        return () => clearTimeout(timeout);
      }
    };

    checkAuthTimeout();
  }, [navigate]);
};

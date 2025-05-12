import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import CareerQuizzes from '../components/Herosection2';
import QuizzesSection2 from '../components/QuizzesSection2';

const Quizzes = () => {
  // Giả sử bạn có một state "isLoggedIn" để kiểm tra trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Bạn có thể thay đổi giá trị "isLoggedIn" khi người dùng đăng nhập
  // Ví dụ, khi có token JWT trong localStorage:
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // Chạy once khi component load

  return (
    <MainLayout>
      <CareerQuizzes />
      {isLoggedIn && <QuizzesSection2 />} {/* Chỉ hiển thị khi người dùng đã đăng nhập */}
    </MainLayout>
  );
};

export default Quizzes;

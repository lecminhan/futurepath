import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom (nếu bạn muốn điều hướng trong app)

const CareerQuizzes = () => {
  return (
    <section
      style={{
        backgroundImage: 'url(/images/hero-quizz.png)', // Thay thế với URL của background ảnh
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container>
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '30px', fontWeight: 'bold', marginLeft: '400px' }}>
            Khám phá con <br /> người của bạn
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px', marginLeft: '545px', textAlign: 'left' }}>
            Xin chào CareerExplorer, <br /> nền tảng phát triển sự nghiệp hàng đầu thế giới
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="light" size="lg" style={{ marginLeft: '405px' }}>
              Bắt đầu
            </Button>
            {/* Đường link "Tìm hiểu thêm về CareerExplorer" */}
            <Link
              to="/about" // Thay đổi đường dẫn tùy theo trang "Tìm hiểu thêm" của bạn
              style={{
                marginLeft: '40px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 'normal',
              }}
            >
              Tìm hiểu thêm về CareerExplorer
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerQuizzes;
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout'
const Quizzes = () => {
  return (
     <MainLayout>
    <Container className="py-5">
      <h2 className="text-center mb-4">Career Quizzes</h2>
      <p>
        Explore various quizzes to find out what career paths match your interests, strengths, and preferences.
      </p>
      
      {/* Ví dụ: Nút bắt đầu quiz */}
      <div className="text-center">
        <Button variant="primary" size="lg" href="/quiz">
          Start the Career Quiz
        </Button>
      </div>
    </Container>
    </MainLayout>
  );
};

export default Quizzes;

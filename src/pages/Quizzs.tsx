import React from 'react';
import MainLayout from '../layouts/MainLayout'
import CareerQuizzes from '../components/Herosection2';
import QuizzesSection2 from '../components/QuizzesSection2';

const Quizzes = () => {
  return (
     <MainLayout>
    <CareerQuizzes/>
    <QuizzesSection2/>
    </MainLayout>
  );
};

export default Quizzes;

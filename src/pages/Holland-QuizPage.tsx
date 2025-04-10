// src/pages/MBTIQuizPage.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HollandQuizForm from '../components/hollandComponents/HollandQuizzForm';
const HollandQuizPage: React.FC = () => {
  return (
    <MainLayout>
      <HollandQuizForm />
    </MainLayout>
  );
};

export default HollandQuizPage;

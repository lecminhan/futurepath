// src/pages/MBTIQuizPage.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import MBTIQuizForm from '../components/mbtiComponents/MBTIQuizForm';
const MBTIQuizPage: React.FC = () => {
  return (
    <MainLayout>
      <MBTIQuizForm />
    </MainLayout>
  );
};

export default MBTIQuizPage;

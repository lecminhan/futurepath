// src/pages/PointAnalyst.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CareerForm from '../components/AiAnalyst/CareerForm';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../pages/Styles/PointAnalyst.css';
import MainLayout from '../layouts/MainLayout';

const PointAnalyst: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <MainLayout>
      <div className="pointanalyst-fullscreen">
        <div className="pointanalyst-header">
          <button onClick={() => navigate('/chatpage')} className="pointanalyst-back">
            <ArrowBackIosIcon fontSize="small" /> Quay lại đoạn Chat
          </button>
        </div>

        <div className="pointanalyst-content">
          <CareerForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default PointAnalyst;

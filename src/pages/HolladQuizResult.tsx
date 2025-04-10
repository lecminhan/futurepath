import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useHollandResult } from '../hooks/useHollandResults';
import HollandDescription from '../components/hollandComponents/HollandDescription';
import HollandStrengths from '../components/hollandComponents/HollandStrengths';
import HollandJobs from '../components/hollandComponents/HollandJob';
import HollandAdvice from '../components/hollandComponents/HollandAdvice';
import HollandOverview from '../components/hollandComponents/HollandOverview';
import QuizTabs from '../components/quizTabs';
import '../pages/Styles/quizResultHolland.css';
import { Box, Button, Typography, CardContent } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HollandWeaknesses from '../components/hollandComponents/HollandWeaknesses';
import HollandTypeSlider from '../components/hollandComponents/HollandTypeSlider';

interface Answer {
  answer: string;
  category: string;
  selectedOption: string; // This field is required
}

interface Answers {
  [key: number]: Answer;
}

const QuizResultHolland: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state as { answers: Answers };
  const scores = useHollandResult(answers);
  const [tabIndex, setTabIndex] = React.useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tryAgain = () => navigate('/quizzes');

  const hollandCode = scores?.result || '';
  const hollandImage = `/images/holland/${hollandCode}.png`; // bạn có thể tạo folder image tương tự MBTI

  return (
    <MainLayout>
      <div className="holland-result-page">
        <div className="holland-result-container">
          <div className="holland-hero">
            <h1>Nhóm Holland của bạn: {hollandCode}</h1>
            <img src={hollandImage} alt={`Holland ${hollandCode}`} className="holland-hero-image" />
            <div className="holland-hero-description">
              <HollandOverview code={hollandCode} />
            </div>
          </div>

          <Box sx={{ textAlign: 'center', mt: -6 }}>
            <Box
              sx={{
                mt: 3,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: '#f0f0f0',
                px: 3,
                py: 1.2,
                mr: 2,
                borderRadius: 2,
                justifyContent: 'center'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Nhóm Holland của bạn:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                {hollandCode}
              </Typography>
            </Box>
            <Button
              onClick={tryAgain}
              variant="contained"
              sx={{
                backgroundColor: '#1580EB',
                color: '#fff',
                px: 4,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem',
                transition: '0.3s ease',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#0E5399'
                }
              }}
            >
              Làm lại bài test <RestartAltIcon sx={{ fontSize: 15 }} />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', mt: 2, ml: 3 }}>
            <QuizTabs tabIndex={tabIndex} setTabIndex={setTabIndex} code={hollandCode} mode="holland" />
            <Box sx={{ flexGrow: 1, pl: 4, width: '250px' }}>
              {tabIndex === 0 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, ml: -3 }}>
                    MÔ TẢ CHUNG VỀ NHÓM {hollandCode}
                  </Typography>
                  <HollandDescription code={hollandCode} />
                </CardContent>
              )}

              {tabIndex === 1 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, ml: -2 }}>
                    ĐIỂM MẠNH CỦA NHÓM TÍNH CÁCH {hollandCode}
                  </Typography>
                  <HollandStrengths code={hollandCode} />
                </CardContent>
              )}

              {tabIndex === 2 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, ml: -2 }}>
                    ĐIỂM YẾU CỦA NHÓM TÍNH CÁCH {hollandCode}
                  </Typography>
                  <HollandWeaknesses code={hollandCode} />
                </CardContent>
              )}
              {tabIndex === 3 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, ml: -2 }}>
                    NGHỀ NGHIỆP PHÙ HỢP
                  </Typography>
                  <HollandJobs code={hollandCode} />
                </CardContent>
              )}

              {tabIndex === 4 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333333', fontWeight: 600, ml: -2 }}>
                    LỜI KHUYÊN
                  </Typography>
                  <HollandAdvice code={hollandCode} />
                </CardContent>
              )}
            </Box>
          </Box>
        </div>
        <Box sx={{ marginTop: '40px', position: 'sticky', top: 0, zIndex: 100 }}>
          <HollandTypeSlider />
        </Box>
      </div>
    </MainLayout>
  );
};

export default QuizResultHolland;

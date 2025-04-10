import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useMBTIResult } from '../hooks/useMbtiResult';
import { sendResultsToAPI } from '../services/quizzResultMbtiService';

import MBTIDescription from '../components/mbtiComponents/mbtiDescription';
import MBTIStrengths from '../components/mbtiComponents/mbtiStrengths';
import MBTIWeaknesses from '../components/mbtiComponents/mbtiWeaknesses';
import MBTIRelationship from '../components/mbtiComponents/mbtiRelationship';
import MBTIAdvice from '../components/mbtiComponents/mbtiAdvice';
import MBTIJobs from '../components/mbtiComponents/mbtiJob';
import MBTITypeSlider from '../components/mbtiComponents/mbtiTypeSlider';

import QuizTabs from '../components/quizTabs';
import './Styles/quizResultMBTI.css';
import { getMBTIName, getMBTIIntro } from '../utils/mbtiUtils';
import { CardContent, Typography, Box, Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface Answer {
  answer: string;
  category: string;
  selectedOption: string;
}

interface Answers {
  [key: number]: Answer;
}

const QuizResultMBTI: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state as { answers: Answers };
  const [tabIndex, setTabIndex] = useState(0);

  const scores = useMBTIResult(answers);
  const mbtiCode = scores?.result || '';
  const mbtiImage = `/images/mbti/${mbtiCode}.png`;

  useEffect(() => {
    if (scores) {
      sendResultsToAPI(scores).catch(console.error);
    }
    window.scrollTo(0, 0);
  }, [scores]);

  const tryAgain = () => navigate('/quizzes');

  return (
    <MainLayout>
      <div className="mbti-result-page">
        <div className="mbti-result-container">
          {/* Hero Section */}
          <div className="mbti-hero">
            <h1>{getMBTIName(mbtiCode)}</h1>
            <img src={mbtiImage} alt={`MBTI ${mbtiCode}`} className="mbti-hero-image" />
            <div className="mbti-hero-info">
              <p className="mbti-hero-description">{getMBTIIntro(mbtiCode)}</p>
            </div>
          </div>

          {/* MBTI Code Summary + Retry */}
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
                Nhóm tính cách của bạn:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                {mbtiCode}
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

          {/* Tab Navigation + Content */}
          <Box sx={{ display: 'flex', mt: 2, ml: 3 }}>
            <QuizTabs tabIndex={tabIndex} setTabIndex={setTabIndex} code={mbtiCode} mode="mbti" />
            <Box sx={{ flexGrow: 1, pl: 4, width: '250px' }}>
              {tabIndex === 0 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 600, ml: -3 }}>
                    TỔNG QUAN TÍNH CÁCH CỦA {mbtiCode}
                  </Typography>
                  <p style={{ marginLeft: '-20px' }}>{getMBTIIntro(mbtiCode)}</p>
                  <MBTIDescription result={mbtiCode} />
                </CardContent>
              )}
              {tabIndex === 1 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 600, ml: -2 }}>
                    ĐIỂM MẠNH CỦA NHÓM TÍNH CÁCH {mbtiCode}
                  </Typography>
                  <MBTIStrengths result={mbtiCode} />
                </CardContent>
              )}
              {tabIndex === 2 && (
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 600, ml: -2 }}>
                    ĐIỂM YẾU CỦA NHÓM TÍNH CÁCH {mbtiCode}
                  </Typography>
                  <MBTIWeaknesses result={mbtiCode} />
                </CardContent>
              )}
              {tabIndex === 3 && (
                <CardContent>
                  <MBTIJobs result={mbtiCode} />
                </CardContent>
              )}
              {tabIndex === 4 && (
                <CardContent>
                  <MBTIRelationship result={mbtiCode} />
                </CardContent>
              )}
              {tabIndex === 5 && (
                <CardContent>
                  <MBTIAdvice result={mbtiCode} />
                </CardContent>
              )}
            </Box>
          </Box>
        </div>

        {/* Bottom Slider */}
        <Box sx={{ marginTop: '40px', position: 'sticky', top: 0, zIndex: 100 }}>
          <MBTITypeSlider />
        </Box>
      </div>
    </MainLayout>
  );
};

export default QuizResultMBTI;

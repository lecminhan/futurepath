import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../../services/QuizServices';
import Question from '../Question';
import { useNotification } from '../../services/NotificationServices';
import '../../styles/global.css';

interface Quiz {
  quiz_id: number;
  content: string;
  option1: string;
  option2: string;
  quiz_type: string;
  category: string;
}

interface Answers {
  [key: number]: { answer: string; category: string; selectedOption: string };
}

const HollandQuizForm: React.FC = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const { showNotification } = useNotification();

  useEffect(() => {
    const getQuizData = async () => {
      const data = await fetchQuizData();
      const hollandQuizzes = data.filter((quiz: Quiz) => quiz.quiz_type === 'Holland');
      setQuizData(hollandQuizzes);
    };
    getQuizData();
  }, []);

  const handleAnswerSelect = (questionId: number, selectedAnswer: string, category: string, option1: string) => {
    // Determine the selected option (Option 1 or Option 2)
    const selectedOption = selectedAnswer === option1 ? 'Option 1' : 'Option 2';

    // Update the answers state with selectedAnswer, category, and selectedOption
    setAnswers((prev: Answers) => {
      const updatedAnswers = {
        ...prev,
        [questionId]: {
          answer: selectedAnswer,
          category,
          selectedOption
        }
      };

      // Log the updated answers state
      console.log('Updated answers state: ', updatedAnswers);

      return updatedAnswers;
    });

    // Move to the next question if it's not the last one
    if (currentQuestionIndex < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    }
  };

  const calculateHollandResult = (): string => {
    const categories: Record<string, number> = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0
    };

    // Duyệt qua từng câu trả lời và tăng điểm cho nhóm tương ứng
    Object.values(answers).forEach(({ selectedOption, category }) => {
      const [option1Category, option2Category] = category.split('/');

      if (selectedOption === 'Option 1' && option1Category) {
        categories[option1Category]++;
      } else if (selectedOption === 'Option 2' && option2Category) {
        categories[option2Category]++;
      }
    });

    // Sắp xếp và lấy 2 nhóm có điểm cao nhất
    const result = Object.entries(categories)
      .map(([name, score]) => ({ name, score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map((item) => item.name)
      .join('');

    return result;
  };

  const handleGoBack = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSubmit = () => {
    const unansweredQuestions = quizData.filter((quiz) => !answers[quiz.quiz_id]);

    if (unansweredQuestions.length > 0) {
      showNotification(`Bạn cần trả lời hết ${unansweredQuestions.length} câu hỏi trước khi nộp bài!`, 'error');

      const firstUnansweredIndex = quizData.findIndex((quiz) => !answers[quiz.quiz_id]);
      setCurrentQuestionIndex(firstUnansweredIndex);

      return;
    }

    const hollandResult = calculateHollandResult();
    showNotification('Nộp bài thành công!', 'success');
    // Pass answers and hollandResult to the result page
    navigate('/quizresultholland', { state: { answers, hollandResult } });
  };

  const isSubmitDisabled = quizData.length > 0 && Object.keys(answers).length < quizData.length;

  const renderQuestion = (quiz: Quiz) => (
    <Question
      key={quiz.quiz_id}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={quizData.length}
      question={quiz.content}
      option1={quiz.option1}
      option2={quiz.option2}
      selectedAnswer={answers[quiz.quiz_id]?.answer}
      onAnswer={(answer) => handleAnswerSelect(quiz.quiz_id, answer, quiz.category, quiz.option1)} // Pass option1 and option2
    />
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div
        style={{
          flex: 1,
          padding: '40px',
          maxWidth: showSidebar ? '70%' : '100%',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              color: '#F1C75F',
              marginTop: '50px',
              textAlign: 'center',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '10px 0',
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            }}
          >
            Holland Test
          </h1>
        </div>

        {quizData.length > 0 && renderQuestion(quizData[currentQuestionIndex])}

        {currentQuestionIndex === quizData.length - 1 && (
          <div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              style={{
                position: 'absolute',
                padding: '15px',
                backgroundColor: isSubmitDisabled ? '#cccccc' : '#F1C75F',
                color: 'white',
                border: 'none',
                borderRadius: '40px',
                cursor: isSubmitDisabled ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                bottom: '50px',
                right: '650px',
                alignItems: 'center',
                transition: 'background-color 0.3s ease'
              }}
            >
              {isSubmitDisabled ? 'Submit Quiz' : 'Submit Quiz'}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={toggleSidebar}
        style={{
          padding: '15px',
          backgroundColor: showSidebar ? '#F1C75F' : '#F1C75F',
          color: 'white',
          border: 'none',
          borderRadius: '10px 0 0px 10px',
          cursor: 'pointer',
          fontSize: '14px',
          marginTop: '80px',
          writingMode: 'vertical-lr',
          height: 'fit-content'
        }}
      >
        {showSidebar ? 'Hide Progress' : 'Show Progress'}
      </button>

      {showSidebar && (
        <div
          style={{
            width: '300px',
            padding: '30px 20px',
            backgroundColor: '#fff',
            overflowY: 'auto',
            height: 'fit-content',
            position: 'sticky',
            top: 0,
            marginTop: '80px',
            marginBottom: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              color: '#495057',
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: '1px solid #dee2e6',
              marginTop: '5px'
            }}
          >
            Your Progress
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
              gap: '12px',
              padding: '12px'
            }}
          >
            {quizData.map((quiz, index) => (
              <div
                key={quiz.quiz_id}
                onClick={() => handleGoBack(index)}
                style={{
                  position: 'relative',
                  width: '70%',
                  aspectRatio: '1/1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: answers[quiz.quiz_id] ? '#F1C75F' : '#fff',
                  borderRadius: '40px',
                  cursor: 'pointer',
                  border: currentQuestionIndex === index ? '2px solid #F1C75F' : answers[quiz.quiz_id] ? '2px solid transparent' : '1px solid #e0e0e0',
                  boxShadow: answers[quiz.quiz_id] ? '0 2px 8px rgba(241, 199, 95, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: currentQuestionIndex === index ? '600' : '400',
                    color: answers[quiz.quiz_id] ? '#fff' : currentQuestionIndex === index ? '#F1C75F' : '#555'
                  }}
                >
                  {index + 1}
                </span>

                {answers[quiz.quiz_id] && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none'
                    }}
                  ></svg>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HollandQuizForm;

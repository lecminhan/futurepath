import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../../services/QuizServices';
import Question from '../Question';
import { useNotification } from '../../services/NotificationServices';
import '../../styles/global.css';

interface Quiz {
  id: number;
  content: string;
  option1: string;
  option2: string;
  quiz_type: string;
  category: string;
}
interface Question {
  id: number;
  option1: string;
  option2: string;
}

interface Answers {
  [key: number]: { answer: string; category: string };
}

const MBTIQuizForm: React.FC = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const { showNotification } = useNotification();

  useEffect(() => {
    const getQuizData = async () => {
      const data = await fetchQuizData();
      // Filter to only include MBTI quizzes
      const mbtiQuizzes = data.filter((quiz: Quiz) => quiz.quiz_type === 'MBTI');
      setQuizData(mbtiQuizzes);
    };
    getQuizData();
  }, []);

  // Hàm ánh xạ giá trị category (E/I, S/N, T/F, J/P

  const handleAnswerSelect = (questionId: number, selectedAnswer: string, category: string, option1: string) => {
    // Xác định selectedOption dựa trên đáp án người dùng chọn
    const selectedOption = selectedAnswer === option1 ? 'Option 1' : 'Option 2';

    // Lưu vào state 'answers' với selectedAnswer và selectedOption
    setAnswers((prev: Answers) => {
      const updatedAnswers = {
        ...prev,
        [questionId]: {
          answer: selectedAnswer, // Lưu đáp án người dùng chọn
          category, // Lưu category của câu hỏi
          selectedOption // Lưu trực tiếp giá trị của option (Option 1 hoặc Option 2)
        }
      };

      // In ra state sau khi cập nhật
      console.log('Updated answers state: ', updatedAnswers);

      // Trả về updatedAnswers đúng kiểu
      return updatedAnswers;
    });

    // Tiến tới câu hỏi tiếp theo nếu không phải câu hỏi cuối cùng
    if (currentQuestionIndex < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Di chuyển đến câu hỏi tiếp theo
      }, 500);
    }
  };

  const calculateMBTIResult = (): string => {
    const categories = {
      'E/I': { E: 0, I: 0 },
      'S/N': { S: 0, N: 0 },
      'T/F': { T: 0, F: 0 },
      'J/P': { J: 0, P: 0 }
    };

    // Đếm số lần chọn cho mỗi category và selectedOption
    Object.values(answers).forEach(({ answer, selectedOption, category }) => {
      // Kiểm tra nếu category là một trong các category đã định nghĩa
      if (categories[category as keyof typeof categories]) {
        // Tăng điểm cho các lựa chọn trong category
        if (selectedOption === 'Option 1') {
          categories[category as keyof typeof categories][answer as keyof (typeof categories)[keyof typeof categories]]++;
        } else if (selectedOption === 'Option 2') {
          categories[category as keyof typeof categories][answer as keyof (typeof categories)[keyof typeof categories]]++;
        }
      }
    });

    // Xác định kết quả cuối cùng dựa trên số lần chọn trong mỗi category
    const result = [categories['E/I'].E >= categories['E/I'].I ? 'E' : 'I', categories['S/N'].S >= categories['S/N'].N ? 'S' : 'N', categories['T/F'].T >= categories['T/F'].F ? 'T' : 'F', categories['J/P'].J >= categories['J/P'].P ? 'J' : 'P'].join(''); // Kết hợp lại thành chuỗi MBTI

    return result;
  };
  const handleGoBack = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSubmit = () => {
    const unansweredQuestions = quizData.filter((quiz) => !answers[quiz.id]);

    if (unansweredQuestions.length > 0) {
      showNotification(`Bạn cần trả lời hết ${unansweredQuestions.length} câu hỏi trước khi nộp bài!`, 'error');

      const firstUnansweredIndex = quizData.findIndex((quiz) => !answers[quiz.id]);
      setCurrentQuestionIndex(firstUnansweredIndex);

      return;
    }

    const mbtiResult = calculateMBTIResult();
    showNotification('Nộp bài thành công!', 'success');
    navigate('/quizresultmbti', { state: { mbtiResult, answers } }); // Truyền cả mbtiResult và answers
  };

  const isSubmitDisabled = quizData.length > 0 && Object.keys(answers).length < quizData.length;

  const renderQuestion = (quiz: Quiz) => (
    <Question
      key={quiz.id}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={quizData.length}
      question={quiz.content}
      option1={quiz.option1}
      option2={quiz.option2}
      selectedAnswer={answers[quiz.id]?.answer}
      onAnswer={(answer) => handleAnswerSelect(quiz.id, answer, quiz.category, quiz.option1)} // Truyền thêm option1, option2
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
            MBTI Test
          </h1>
        </div>

        {/* Current Question */}
        {quizData.length > 0 && renderQuestion(quizData[currentQuestionIndex])}

        {/* Submit Button */}
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

      {/* Progress Sidebar */}
      {showSidebar && (
        <div
          style={{
            width: '300px',
            padding: '24px 20px',
            backgroundColor: '#fff',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
            position: 'sticky',
            top: '80px',
            marginBottom: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              color: '#343a40',
              marginBottom: '16px',
              borderBottom: '1px solid #e9ecef',
              paddingBottom: '8px'
            }}
          >
            Your Progress
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
              gap: '12px',
              padding: '4px'
            }}
          >
            {quizData.map((quiz, index) => {
              const isAnswered = answers[quiz.id];
              const isActive = currentQuestionIndex === index;

              return (
                <div
                  key={quiz.id}
                  onClick={() => handleGoBack(index)}
                  style={{
                    aspectRatio: '1/1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    backgroundColor: isAnswered ? '#f1c75f' : isActive ? '#fff9ec' : '#f8f9fa',
                    border: isActive ? '2px solid #f1c75f' : isAnswered ? '2px solid transparent' : '1px solid #dee2e6',
                    boxShadow: isAnswered ? '0 2px 8px rgba(241, 199, 95, 0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: isActive ? '600' : '400',
                      color: isAnswered ? '#fff' : isActive ? '#f1c75f' : '#495057'
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MBTIQuizForm;

import React, { useEffect, useState } from 'react';
import './style/CareerForm.css';
import { getUserId } from '../../utils/useridUtils';
import { useNotification } from '../../services/NotificationServices';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getQuizLatestResult, submitCareerForm } from '../../services/QuizLatestResultService'; // Import quizLatestResultService
const introMessages = [
  'Chào bạn! Tôi là trợ lý AI của bạn.',
  'Tôi sẽ giúp bạn phân tích thông tin cá nhân để gợi ý nghề nghiệp phù hợp.',
  'Hãy cùng bắt đầu nhé!',
];

const questions: { name: keyof QuizAnswers; label: string }[] = [
  { name: 'mbti', label: 'Nhóm MBTI của bạn là:' },
  { name: 'holland', label: 'Nhóm Holland của bạn là:' },
  { name: 'skills', label: 'Bạn có những kỹ năng gì?' },
  { name: 'interests', label: 'Sở thích của bạn là gì?' },
];

type QuizAnswers = {
  mbti: string;
  holland: string;
  skills: string;
  interests: string;
};

const Userid = getUserId();

const CareerForm: React.FC = () => {
  const [answers, setAnswers] = useState<QuizAnswers>({
    mbti: '',
    holland: '',
    skills: '',
    interests: '',
  });
  const [currentStep, setCurrentStep] = useState(-introMessages.length);
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnalyzingMessage, setShowAnalyzingMessage] = useState(false); // ✅ trạng thái hiển thị tin nhắn phân tích
  const { showNotification } = useNotification();

  const [resultData, setResultData] = useState<null | {
    mbti: string;
    holland: string;
    skills: string;
    interests: string;
    suggestion: string;
  }>(null);

  useEffect(() => {
    // Lấy dữ liệu quiz từ API
    getQuizLatestResult(Userid)
      .then((data) => {
        if (data) {
          setAnswers((prev) => ({
            ...prev,
            mbti: data.mbti,
            holland: data.holland,
          }));
        }
      })
      .catch(() => showNotification('Lỗi khi tải dữ liệu MBTI/Holland', 'error'));
  }, [Userid]);

  const handleNext = () => {
    if (currentStep < 0) {
      setCurrentStep(currentStep + 1);
      return;
    }

    const currentQuestion = questions[currentStep];
    const currentAnswer = answers[currentQuestion.name];

    if ((currentQuestion.name === 'mbti' || currentQuestion.name === 'holland') && !currentAnswer) {
      showNotification('Bạn vui lòng hoàn thành bài quiz để thực hiện tính năng này.', 'warning');
      return;
    }

    if (!input.trim() && !currentAnswer) return;

    const newAnswers = {
      ...answers,
      [currentQuestion.name]: input.trim() || currentAnswer,
    };
    setAnswers(newAnswers);
    setInput('');

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitForm(newAnswers);
    }
  };

  const submitForm = (formData: QuizAnswers) => {
    setIsSubmitting(true);
    setShowAnalyzingMessage(true); // ✅ hiện tin nhắn trong khung chat
  
    if (Userid !== null) {
      submitCareerForm(Userid, formData)
        .then((flaskResult) => {
          if (flaskResult) {
            // Kiểm tra flaskResult có phải là null trước khi sử dụng
            showNotification('Phân tích thành công!', 'success');
            setShowAnalyzingMessage(false); // ✅ ẩn tin nhắn sau khi xong
  
            setResultData({
              mbti: answers.mbti,
              holland: answers.holland,
              skills: flaskResult.skills || '',  // Kiểm tra nếu flaskResult.skills là null
              interests: flaskResult.interests || '',  // Kiểm tra nếu flaskResult.interests là null
              suggestion: flaskResult.suggestion || '',  // Kiểm tra nếu flaskResult.suggestion là null
            });
          } else {
            // Nếu flaskResult là null, xử lý lỗi hoặc thông báo
            showNotification('Không có kết quả phân tích nghề nghiệp!', 'error');
            setShowAnalyzingMessage(false);
          }
        })
        .catch((err) => {
          setShowAnalyzingMessage(false);
          showNotification(err.message || 'Lỗi khi gửi hoặc nhận dữ liệu!', 'error');
        })
        .finally(() => setIsSubmitting(false));
    }
  };
  

  const currentQuestion = currentStep >= 0 ? questions[currentStep] : null;
  const isAutoFilledStep = currentQuestion?.name === 'mbti' || currentQuestion?.name === 'holland';
  const autoValue = currentQuestion ? answers[currentQuestion.name].trim() : '';

  return (
    <div className="careerform-bubble-wrapper">
      <div className="careerform-bubble-flex">
        {!resultData ? (
          <div className="careerform-step right">
            {/* Hiển thị câu hỏi hoặc tin nhắn */}
            <p className="careerform-question">
              {showAnalyzingMessage
                ? 'Tôi đang tiến hành phân tích, vui lòng đợi...'
                : currentStep < 0
                ? introMessages[introMessages.length + currentStep]
                : currentQuestion?.label}
            </p>

            {/* Input */}
            {currentStep >= 0 && !showAnalyzingMessage && (
              <>
                <div className="careerform-chatbubble-input">
                  <input
                    className="careerform-chatinput"
                    type="text"
                    value={isAutoFilledStep ? autoValue : input}
                    onChange={(e) => !isAutoFilledStep && setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                    placeholder="Nhập tại đây..."
                    disabled={isSubmitting || isAutoFilledStep}
                  />
                </div>
                <div className="careerform-button-wrapper">
                  <button onClick={handleNext} className="careerform-nextbtn" disabled={isSubmitting}>
                    <NavigateNextIcon sx={{ marginLeft: '-8px' }} />
                  </button>
                </div>
              </>
            )}

            {/* Nút ở phần intro */}
            {currentStep < 0 && !showAnalyzingMessage && (
              <div className="careerform-button-wrapper">
                <button onClick={handleNext} className="careerform-nextbtn">
                  <NavigateNextIcon sx={{ marginLeft: '-8px' }} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="careerform-step result-bubble">
            <p style={{ fontSize: '14px', fontWeight: '600' }}>
              Tôi đã hoàn tất quá trình phân tích thông tin của bạn. Dựa trên những sở thích như {resultData.interests} và kỹ năng {resultData.skills}, tôi xin đề xuất một số nghề nghiệp phù hợp mà bạn có thể cân nhắc:
            </p>
            <p style={{ fontSize: '14px', fontWeight: '600' }}>Gợi ý nghề nghiệp phù hợp:</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{resultData.suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerForm;

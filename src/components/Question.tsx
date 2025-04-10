import React, { useState, useEffect } from 'react';

interface QuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  option1: string;
  option2: string;
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ questionNumber, totalQuestions, question, option1, option2, selectedAnswer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAnswer) {
      setSelectedOption(selectedAnswer);
    }
  }, [selectedAnswer]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '8px',
        float: 'left'
      }}
    >
      <div
        style={{
          fontSize: '16px',
          marginBottom: '20px',
          color: '#555'
        }}
      >
        Câu số <span style={{ color: '#F1C75F' }}>{questionNumber}</span>/{totalQuestions}
      </div>

      <h3
        style={{
          display: 'inline-block', // Quan trọng - chỉ chiếm width theo nội dung
          fontSize: '18px',
          marginBottom: '30px',
          color: '#333',
          fontWeight: 'normal',
          lineHeight: '1.5',
          padding: '15px',
          backgroundColor: '#F1C75F',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderRadius: '40px 40px 40px 0px' // Rounded right corners only
        }}
      >
        {question}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#F1C75F';
            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(241, 199, 95, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#ddd';
            e.currentTarget.style.boxShadow = 'none';
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '40px 40px 40px 0',
            backgroundColor: selectedOption === option1 ? '#f0f8ff' : '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: 'fit-content'
          }}
        >
          <input
            type="radio"
            name={`option-${questionNumber}`}
            checked={selectedOption === option1}
            onChange={() => handleOptionChange(option1)}
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              marginRight: '12px',
              width: '18px',
              height: '18px',
              border: `2px solid ${selectedOption === option1 ? '#F1C75F' : '#ccc'}`,
              borderRadius: '50%',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',
              backgroundColor: selectedOption === option1 ? '#F1C75F' : '#fff',
              outline: 'none'
            }}
          />
          {selectedOption === option1 && (
            <div
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                left: '22px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
          )}
          {option1}
        </label>

        <label
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#F1C75F';
            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(241, 199, 95, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#ddd';
            e.currentTarget.style.boxShadow = 'none';
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '40px 40px 40px 0',
            backgroundColor: selectedOption === option1 ? '#f0f8ff' : '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            width: 'fit-content'
          }}
        >
          <input
            type="radio"
            name={`option-${questionNumber}`}
            checked={selectedOption === option2}
            onChange={() => handleOptionChange(option2)}
            style={{
              appearance: 'none',
              WebkitAppearance: 'none',
              marginRight: '12px',
              width: '18px',
              height: '18px',
              border: `2px solid ${selectedOption === option2 ? '#F1C75F' : '#ccc'}`,
              borderRadius: '50%',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',
              backgroundColor: selectedOption === option2 ? '#F1C75F' : '#fff',
              outline: 'none'
            }}
          />
          {selectedOption === option2 && (
            <div
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                left: '22px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
          )}
          {option2}
        </label>
      </div>
    </div>
  );
};

export default Question;

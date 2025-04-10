// src/components/Quiz.tsx
import React, { useState } from 'react';

interface QuizProps {
  quiz_id: number;
  question: string;
  option1: string;
  option2: string;
  onAnswer: (answer: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz_id, question, option1, option2, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  // Styles
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    height: '50vh',
    marginBottom: '40px'
  };

  const questionStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const optionsContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%'
  };

  const optionStyles = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: isSelected ? '#F6F6F6' : 'white',
    transition: 'all 0.2s'
  });

  const radioStyles: React.CSSProperties = {
    appearance: 'none',
    width: '18px',
    height: '18px',
    border: '2px solid #ccc',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    margin: 0
  };

  const radioDotStyles: React.CSSProperties = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: '#cccccc',
    borderRadius: '90%',
    transform: 'translate(40%, 0%)'
  };

  return (
    <div className="quiz-container" style={containerStyles}>
      <h2>Câu {quiz_id}</h2>
      <h2 style={questionStyles}>{question}</h2>
      <div style={optionsContainerStyles}>
        {/* Option 1 */}
        <label style={optionStyles(selectedOption === option1)}>
          <input type="radio" name="quiz-option" checked={selectedOption === option1} onChange={() => handleOptionChange(option1)} style={radioStyles} />
          {selectedOption === option1 && <div style={radioDotStyles} />}
          <span>{option1}</span>
        </label>

        {/* Option 2 */}
        <label style={optionStyles(selectedOption === option2)}>
          <input type="radio" name="quiz-option" checked={selectedOption === option2} onChange={() => handleOptionChange(option2)} style={radioStyles} />
          {selectedOption === option2 && <div style={radioDotStyles} />}
          <span>{option2}</span>
        </label>
      </div>
    </div>
  );
};

export default Quiz;

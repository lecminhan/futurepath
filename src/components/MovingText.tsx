import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/MovingText.css';
const MovingTextSection: React.FC = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <div className="moving-text-container">
        <h1 className="moving-text" style={{ fontSize: '5.08rem', marginBottom: '50px' }}>
          Make your next move. Today.
        </h1>
      </div>
      <p style={{ fontSize: '1.25rem', padding: '5px' }}>Feel confident in your next career move with the insights and data you need.</p>
      <Button variant="light">Get Started Now</Button>
      <br />
      <br />
    </section>
  );
};

export default MovingTextSection;

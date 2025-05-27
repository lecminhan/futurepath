import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './styles/clock.css'
const ClockComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [speed, setSpeed] = useState(1); // Giữ lại tốc độ nếu bạn muốn cho phép thay đổi

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 / speed); // Thay đổi interval dựa trên tốc độ
    
    return () => clearInterval(timer);
  }, [speed]);

  // Calculate angles for clock hands
  const secondAngle = (currentTime.getSeconds() / 60) * 360;
  const minuteAngle = (currentTime.getMinutes() / 60) * 360;
  const hourAngle = ((currentTime.getHours() % 12) / 12) * 360 + (currentTime.getMinutes() / 60) * 30;

  const changeSpeed = (newSpeed: number) => setSpeed(newSpeed);

  return (
    <Card className="overview-card clock-card">
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Đồng hồ</Card.Title>
        <div className="clock-container">
          <div className="clock">
            <div className="clock-face">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                <div key={num} className="number" style={{ transform: `rotate(${num * 30}deg)` }}>
                  <span style={{ transform: `rotate(-${num * 30}deg)` }}>{num}</span>
                </div>
              ))}
            </div>
            <div className="clock-hand hour" style={{ transform: `rotate(${hourAngle}deg)` }} />
            <div className="clock-hand minute" style={{ transform: `rotate(${minuteAngle}deg)` }} />
            <div className="clock-hand second" style={{ transform: `rotate(${secondAngle}deg)` }} />
          </div>
        </div>
        <Card.Text className="mt-3" style={{textAlign:'center'}}>
          {currentTime.toLocaleTimeString()}
        </Card.Text>
        <div className="clock-controls mt-3">
          <div className="btn-group">
            <button 
              onClick={() => changeSpeed(1)} 
              className={`btn btn-outline-primary ${speed === 1 ? 'active' : ''}`}
            >
              1x
            </button>
            <button 
              onClick={() => changeSpeed(2)} 
              className={`btn btn-outline-primary ${speed === 2 ? 'active' : ''}`}
            >
              2x
            </button>
            <button 
              onClick={() => changeSpeed(5)} 
              className={`btn btn-outline-primary ${speed === 5 ? 'active' : ''}`}
            >
              5x
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ClockComponent;
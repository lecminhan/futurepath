import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Đảm bảo bạn đã cài react-router-dom

const MbtiQuiz = () => {
  return (
    <Card className="mb-4" style={{ width: '100%', backgroundColor: '#242424', color: 'white' }}>
      <Card.Img variant="top" src="/images/mbticard.png" />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold',textAlign:'center' }}>Trắc nghiệm MBTI</Card.Title>
        <Card.Text>
        MBTI (Myers-Briggs Type Indicator) là một bài trắc nghiệm tính cách dựa trên lý thuyết của Carl Jung, giúp phân loại con người thành 16 nhóm tính cách dựa trên 4 cặp đặc điểm: hướng ngoại – hướng nội, giác quan – trực giác, lý trí – cảm xúc, và nguyên tắc – linh hoạt. Bằng cách xác định xu hướng hành vi và tư duy của mỗi người, MBTI giúp bạn hiểu rõ hơn về bản thân, khám phá điểm mạnh, điểm yếu và định hướng nghề nghiệp phù hợp.
        </Card.Text>
        <Card.Text>
        ✨ Làm bài ngay để định hướng tương lai của bạn! 🚀
        </Card.Text>
        <Link to="/mbti-quiz">
          <Button variant="light" className="mt-3" style={{marginLeft:'200px',marginBottom:'4px'}}>
            Bắt đầu
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MbtiQuiz;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MbtiQuiz from '../components/MBTICard';
import HollandQuiz from '../components/HollandCard';
const QuizzesSection2 = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '50px 0',
          textAlign: 'center',
          marginTop:'50px'
        }}
      >
        <Container>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold',marginBottom:'30px' }}>Chào mừng bạn đến với bài quizzes hướng nghiệp </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '30px', textAlign:'justify'}}>
            Việc lựa chọn nghề nghiệp phù hợp là một bước quan trọng trong hành trình tìm kiếm bản thân và sự nghiệp.
            Để giúp bạn hiểu hơn về chính mình và khám phá nghề nghiệp phù hợp, hãy tham gia vào các bài trắc nghiệm
            nghề nghiệp ngay hôm nay. Hãy bắt đầu ngay và cùng chúng tôi tìm ra hướng đi tuyệt vời cho bạn! 🎯
          </p>

        </Container>
      </section>

      {/* Quizzes Cards Section */}
       <section style={{ padding: '50px 0' }}>
             <Container>
               <Row>
                 {/* Hiển thị Trắc nghiệm MBTI */}
                 <Col sm={12} md={6} lg={6} className="mb-4">
                   <MbtiQuiz />
                 </Col>
     
                 {/* Hiển thị Trắc nghiệm nghề nghiệp Holland */}
                 <Col sm={12} md={6} lg={6} className="mb-4">
                   <HollandQuiz />
                 </Col>
               </Row>
             </Container>
           </section>
    </div>
  );
};

export default QuizzesSection2;

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Đảm bảo bạn đã cài react-router-dom

const HollandQuiz = () => {
  return (
    <Card className="mb-4" style={{ width: '100%', backgroundColor: '#242424', color: 'white' }}>
      <Card.Img variant="top" src="/images/hollandcard.png" />
      <Card.Body>
        <Card.Text>Holland Code (RIASEC) là một mô hình phân loại tính cách nghề nghiệp do Tiến sĩ John Holland phát triển, chia con người thành 6 nhóm chính: Realistic (Thực tế), Investigative (Nghiên cứu), Artistic (Nghệ thuật), Social (Xã hội), Enterprising (Tham vọng) và Conventional (Cẩn thận). Bài trắc nghiệm Holland giúp xác định sở thích, thế mạnh và môi trường làm việc phù hợp với từng cá nhân, từ đó hỗ trợ trong việc lựa chọn ngành học và nghề nghiệp.</Card.Text>
        <Card.Text>✨ Làm bài ngay để định hướng tương lai của bạn! 🚀</Card.Text>
        <Link to="/hollandquiz">
          <Button variant="light" className="mt-3" style={{ marginLeft: '200px' }}>
            Bắt đầu
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HollandQuiz;

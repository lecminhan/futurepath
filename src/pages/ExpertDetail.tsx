import { useParams, useNavigate } from 'react-router-dom';
import './Styles/expertdetail.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MainLayout from '../layouts/MainLayout';
const expertData = [
  { 
    id: 1, 
    name: "Nguyễn Văn A", 
    avatar: "https://i.pravatar.cc/150?img=11", 
    description: "Chuyên gia tư vấn chọn ngành và định hướng nghề nghiệp toàn diện.",
    price: "200.000đ/2 giờ",
    specialization: "Tư vấn định hướng nghề nghiệp, chọn ngành học, lộ trình phát triển cá nhân."
  },
  { 
    id: 2, 
    name: "Trần Thị B", 
    avatar: "https://i.pravatar.cc/150?img=12", 
    description: "Chuyên gia nghiên cứu thị trường lao động, hỗ trợ sinh viên chọn nghề.",
    price: "250.000đ/2 giờ",
    specialization: "Nghiên cứu thị trường lao động, phân tích xu hướng ngành nghề."
  },
];

const ExpertDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const expert = expertData.find(e => e.id === Number(id));

  if (!expert) return <p>Không tìm thấy chuyên gia.</p>;

  const handleBooking = () => {
    navigate(`/booking/${expert.id}`);
  };

  return (
    <MainLayout>
    <div className="expert-detail-page">
      <div className="expert-detail-header">
        <IconButton onClick={() => navigate("/expert")} sx={{ color: "#0d6efd" }}>
          <ArrowBackIcon />
        </IconButton>
        <h1>Thông tin chuyên gia</h1>
      </div>

      <div className="expert-detail-content">
        <div className="expert-info">
          <img src={expert.avatar} alt={expert.name} className="expert-avatar" />
          <h2>{expert.name}</h2>
          <p className="expert-description">{expert.description}</p>
        </div>

        <div className="expert-detail-box">
          <h3>Chuyên môn</h3>
          <p>{expert.specialization}</p>

          <div className="expert-price">
            <span>{expert.price}</span>
          </div>

          <button className="book-now-button" onClick={handleBooking}>
            <CalendarMonthIcon sx={{ marginRight: "8px" }} />
            Đặt lịch tư vấn
          </button>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default ExpertDetail;

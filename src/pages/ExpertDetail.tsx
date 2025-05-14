import { useParams, useNavigate } from 'react-router-dom';
import './Styles/expertdetail.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MainLayout from '../layouts/MainLayout';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress từ MUI
import { getExpertDetails } from '../services/expertDetailService'; // Import hàm gọi API từ service

interface Expert {
  id: number;
  name: string;
  expertise: string;
  experience_years: number;
  date_of_birth: string;
  gender: string;
  major: string;
  workplace: string;
  description: string;
  certifications: string;
  avatar: string;
}

const ExpertDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);

  // Kiểm tra nếu id có giá trị trước khi gọi API
  useEffect(() => {
    if (!id) {
      console.error("ID chuyên gia không hợp lệ.");
      setLoading(false); // Dừng loading nếu không có id
      return;
    }

    const fetchExpert = async () => {
      try {
        const expertData = await getExpertDetails(id); // Gọi API từ service
        setExpert(expertData); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy thông tin chuyên gia:", error);
      } finally {
        setLoading(false); // Sau khi load xong, set loading thành false
      }
    };
    
    fetchExpert();
  }, [id]);

  if (loading) {
    // Hiển thị CircularProgress khi đang tải
    return (
      <MainLayout>
        <div className="loading-container">
          <CircularProgress />
          <p>Đang load...</p>
        </div>
      </MainLayout>
    );
  }

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
            {/* Hiển thị avatar cho nam hoặc nữ */}
            <img
              src={
                expert.gender === 'male'
                  ? 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' // Avatar nam
                  : 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png' // Avatar nữ
              }
              alt={expert.name}
              className="expert-avatar"
            />
            <h2>{expert.name}</h2>
            <p className="expert-expertise"><strong>Chuyên môn: </strong>{expert.expertise}</p>
            <p className="expert-description">{expert.description}</p>
          </div>

          <div className="expert-detail-box">
            <h3>Thông tin chi tiết</h3>
            <p><strong>Kinh nghiệm: </strong>{expert.experience_years} năm</p>
            <p><strong>Ngày sinh: </strong>{new Date(expert.date_of_birth).toLocaleDateString()}</p>
            <p><strong>Giới tính: </strong>{expert.gender}</p>
            <p><strong>Chuyên ngành: </strong>{expert.major}</p>
            <p><strong>Công ty làm việc: </strong>{expert.workplace}</p>
            <p><strong>Chứng chỉ: </strong>{expert.certifications}</p>
          </div>

          <div className="expert-price">
            <span><strong>Giá: </strong>250.000đ/2 giờ</span> {/* Giá cố định */}
          </div>

          <div className="expert-price">
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

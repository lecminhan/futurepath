import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MainLayout from '../layouts/MainLayout';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { getExpertDetails } from '../services/expertDetailService';
import axios from 'axios';
import './Styles/expertdetail.css';
import { getUserId } from "../utils/useridUtils";
import { useNotification } from "../services/NotificationServices";  // Import hook

interface ScheduleAPIItem {
  id: string;
  available_date: string;
  expert_id: string;
  start_time: string;
  end_time: string;
}

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

const API_URL = import.meta.env.VITE_AN_API_URL;

const ExpertDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);

  // Lịch tư vấn lấy từ API
  const [schedules, setSchedules] = useState<ScheduleAPIItem[]>([]);
  const [loadingSchedules, setLoadingSchedules] = useState(false);
  const [errorSchedules, setErrorSchedules] = useState<string | null>(null);

  // Popup modal
  const [openDialog, setOpenDialog] = useState(false);
  // Lịch được chọn để đặt
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleAPIItem | null>(null);
  // Trạng thái gửi đặt lịch
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  // Lý do người dùng nhập
  const [reason, setReason] = useState<string>("");

  const UserId = getUserId();
  const { showNotification } = useNotification();  // Lấy hàm showNotification từ context
  
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchExpert = async () => {
      try {
        const expertData = await getExpertDetails(id);
        setExpert(expertData);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin chuyên gia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpert();
  }, [id]);

  // Lấy lịch theo expert khi mở popup
 const fetchSchedules = async (expertId: number) => {
  setLoadingSchedules(true);
  setErrorSchedules(null);

  try {
    const response = await axios.get(`${API_URL}/api/schedule/consultant-schedules/${expertId}`);

    if (response.data.success) {
      const filteredSchedules = response.data.schedules.filter((schedule: ScheduleAPIItem) => {
        const now = new Date();  // Thời gian hiện tại
        const currentDate = now.toISOString().split("T")[0];  // Lấy ngày hiện tại (YYYY-MM-DD)
        const currentTime = now.toISOString().split("T")[1].split(".")[0]; // Lấy giờ hiện tại (HH:MM:SS)

        // Kiểm tra ngày
        const isDateValid = schedule.available_date >= currentDate;

        // Kiểm tra giờ nếu là cùng ngày
        const isTimeValid = schedule.available_date > currentDate 
          ? true  // Nếu ngày lớn hơn hôm nay, thì bỏ qua giờ
          : schedule.start_time > currentTime; // Nếu ngày là hôm nay, so sánh giờ

        return isDateValid && isTimeValid; // Lọc lịch theo ngày và giờ
      });

      setSchedules(filteredSchedules); // Lưu lại các lịch chưa qua
    } else {
      setErrorSchedules("Không thể tải lịch làm việc");
    }
  } catch (error) {
    setErrorSchedules("Lỗi khi gọi API lịch làm việc");
    console.error(error);
  } finally {
    setLoadingSchedules(false);
  }
};



  const handleOpenDialog = () => {
    if (!expert) return;
    fetchSchedules(expert.id);
    setSelectedSchedule(null);
    setBookingError(null);
    setBookingSuccess(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectSchedule = (schedule: ScheduleAPIItem) => {
    setSelectedSchedule(schedule);
    setBookingError(null);
    setBookingSuccess(null);
  };

  // Gửi API POST đặt lịch
  const handleConfirmBooking = async () => {
    if (!selectedSchedule || !expert || !reason) return; // Kiểm tra nếu không có lý do, không gửi yêu cầu

    setBookingLoading(true);
    setBookingError(null);
    setBookingSuccess(null);
    try {
      // Gửi API để tạo consultation
      const user_id = UserId; // Thay bằng id người dùng thực tế nếu cần
      const expert_id = expert.id;
      const schedule_id = selectedSchedule.id;

      const response = await axios.post(
        "http://localhost:3004/api/consultation/create-consultation",
        { user_id, expert_id, schedule_id, reason }
      );

      if (response.data.message === "Consultation created successfully") {
        setBookingSuccess("Đặt lịch thành công! Vui lòng kiểm tra tin nhắn của bạn.");
        showNotification("Đặt lịch thành công!", "success");  // Hiển thị thông báo thành công
      } else {
        setBookingError("Đặt lịch thất bại. Vui lòng thử lại.");
        showNotification("Đặt lịch thất bại. Vui lòng thử lại.", "error");  // Hiển thị thông báo lỗi
      }
    } catch (error) {
      setBookingError("Đặt lịch thất bại. Vui lòng thử lại.");
      showNotification("Đặt lịch thất bại. Vui lòng thử lại.", "error");  // Hiển thị thông báo lỗi
      console.error(error);
    } finally {
      setBookingLoading(false);
      setOpenDialog(false); // Đóng popup sau khi hoàn tất
    }
  };

  if (loading) {
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

  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString();

  const formatTime = (timeStr: string) => {
    const [h, m] = timeStr.split(":");
    return `${h}:${m}`;
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
            <img
              src={
                expert.gender === 'male'
                  ? 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                  : 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png'
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
            <span><strong>Giá: </strong>200.000đ/2 giờ</span>
          </div>

          <div className="expert-price">
            <button className="book-now-button" onClick={handleOpenDialog}>
              <CalendarMonthIcon sx={{ marginRight: "8px" }} />
              Đặt lịch tư vấn
            </button>
          </div>
        </div>

        {/* Popup modal */}
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
          <DialogTitle>Chọn ngày giờ tư vấn</DialogTitle>
          <DialogContent dividers>
            {loadingSchedules && <p>Đang tải lịch làm việc...</p>}
            {errorSchedules && <p style={{ color: 'red' }}>{errorSchedules}</p>}

            {!loadingSchedules && !errorSchedules && schedules.length === 0 && <p>Chưa có lịch làm việc.</p>}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {schedules.map(schedule => {
                const isSelected = selectedSchedule?.id === schedule.id;
                return (
                  <Button
                    key={schedule.id}
                    variant={isSelected ? "contained" : "outlined"}
                    color={isSelected ? "primary" : "inherit"}
                    onClick={() => handleSelectSchedule(schedule)}
                    style={{ minWidth: 140, whiteSpace: "normal", textAlign: "center" }}
                  >
                    {formatDate(schedule.available_date)}<br />
                    {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                  </Button>
                );
              })}
            </div>

            <textarea 
              placeholder="Nhập lý do tư vấn..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ width: '100%', marginTop: '10px' }}
            />

            {bookingError && <p style={{ color: "red", marginTop: 10 }}>{bookingError}</p>}
            {bookingSuccess && <p style={{ color: "green", marginTop: 10 }}>{bookingSuccess}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">Hủy</Button>
            <Button 
              onClick={handleConfirmBooking} 
              color="primary" 
              variant="contained" 
              disabled={!selectedSchedule || bookingLoading || !reason}
            >
              {bookingLoading ? "Đang đặt lịch..." : "Xác nhận"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default ExpertDetail;

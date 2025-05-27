import { Card } from 'react-bootstrap';
import { Calendar } from 'react-feather';
import './styles/calendar.css'
interface CalendarCardProps {
  currentDate?: Date; // Optional prop để có thể truyền ngày từ bên ngoài
}

const DateTimeCard: React.FC<CalendarCardProps> = ({ currentDate = new Date() }) => {
  // Lấy thông tin tháng/năm hiện tại
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  // Tạo mảng các ngày trong tháng
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Tạo mảng các ngày trong tuần
  const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  // Tạo mảng lịch
  const calendarDays = [];
  
  // Thêm các ô trống cho những ngày đầu tháng không thuộc tháng này
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }

  // Thêm các ngày trong tháng
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today;
    calendarDays.push(
      <div 
        key={`day-${day}`} 
        className={`calendar-day ${isToday ? 'current-day' : ''}`}
      >
        {day}
      </div>
    );
  }

  return (
    <Card className="overview-card calendar-card">
      <Card.Body>
        <Card.Title>
          <Calendar size={24} /> Lịch tháng {month + 1}/{year}
        </Card.Title>
        <div className="calendar-container">
          {/* Hiển thị các ngày trong tuần */}
          <div className="calendar-weekdays">
            {weekdays.map((day) => (
              <div key={day} className="calendar-weekday">
                {day}
              </div>
            ))}
          </div>
          
          {/* Hiển thị các ngày trong tháng */}
          <div className="calendar-days">
            {calendarDays}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DateTimeCard;
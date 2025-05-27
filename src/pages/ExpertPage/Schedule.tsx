import React, { useState, useEffect } from "react";
import { Container, Card, Button, Form, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import NavBar from "../../components/Navbar";
import '../Styles/schedule.css';
import { getUserId } from "../../utils/useridUtils";

interface ScheduleAPIItem {
  id: string;
  available_date: string; // ISO string
  expert_id: string;
  start_time: string; // "05:00:00"
  end_time: string;   // "07:00:00"
}

const timeSlotMap: Record<string, { start_time: string; end_time: string }> = {
  "5:00 AM - 7:00 AM": { start_time: "05:00:00", end_time: "07:00:00" },
  "7:00 AM - 9:00 AM": { start_time: "07:00:00", end_time: "09:00:00" },
  "9:00 AM - 11:00 AM": { start_time: "09:00:00", end_time: "11:00:00" },
  "11:00 AM - 1:00 PM": { start_time: "11:00:00", end_time: "13:00:00" },
  "1:00 PM - 3:00 PM": { start_time: "13:00:00", end_time: "15:00:00" },
  "3:00 PM - 5:00 PM": { start_time: "15:00:00", end_time: "17:00:00" },
  "5:00 PM - 7:00 PM": { start_time: "17:00:00", end_time: "19:00:00" },
  "7:00 PM - 9:00 PM": { start_time: "19:00:00", end_time: "21:00:00" },
};

const API_URL = import.meta.env.VITE_AN_API_URL;
const timeSlots = Object.keys(timeSlotMap);

function getUniqueDates(schedules: ScheduleAPIItem[]) {
  const dateSet = new Set<string>();
  schedules.forEach(({ available_date }) => {
    const dateOnly = available_date.split("T")[0];
    dateSet.add(dateOnly);
  });
  return Array.from(dateSet).sort();
}

function parseDateLocal(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

const formatDateDisplay = (dateStr: string) => {
  const d = parseDateLocal(dateStr);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(2);
  return `${dd}/${mm}/${yy}`;
};

const SchedulePage: React.FC = () => {
  const [expertId, setExpertId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [schedules, setSchedules] = useState<ScheduleAPIItem[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state for manual entry
  const [manualDate, setManualDate] = useState("");
  const [manualSlot, setManualSlot] = useState(timeSlots[0]);

  // Lấy expertId khi component mount
  useEffect(() => {
    const id = getUserId();
    setExpertId(id);
  }, []);

  const fetchSchedules = async () => {
    if (!expertId) return; // Chưa có expertId thì không fetch
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/schedule/consultant-schedules/${expertId}`);
      if (response.data.success) {
        setSchedules(response.data.schedules);
      }
    } catch (error) {
      console.error("Failed to load schedules", error);
      setErrorMessage("Không thể tải lịch làm việc");
    } finally {
      setLoading(false);
    }
  };

  // Tự động fetch lại khi expertId thay đổi
  useEffect(() => {
    fetchSchedules();
  }, [expertId]);

  const handleManualAdd = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!manualDate) {
      setErrorMessage("Vui lòng chọn ngày");
      return;
    }

    if (!expertId) {
      setErrorMessage("Không xác định được chuyên gia");
      return;
    }

    const selectedDate = new Date(manualDate);
    const now = new Date();

    selectedDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setErrorMessage("Không được chọn ngày trước ngày hôm nay");
      return;
    }

    if (selectedDate.getTime() === today.getTime()) {
      const nowTime = now.getHours() * 60 + now.getMinutes();
      const [startH, startM] = timeSlotMap[manualSlot].start_time.split(":").map(Number);
      const slotStart = startH * 60 + startM;
      if (slotStart <= nowTime) {
        setErrorMessage("Khung giờ đã qua không thể chọn");
        return;
      }
    }

    const newSchedule = {
      expert_id: expertId,
      available_date: manualDate,
      start_time: timeSlotMap[manualSlot].start_time,
      end_time: timeSlotMap[manualSlot].end_time
    };

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/api/schedule/consultant-schedules`,
        [newSchedule]
      );

      if (response.data.success) {
        setSuccessMessage("Thêm lịch thành công!");
        setManualDate("");
        setShowAddForm(false);
        await fetchSchedules();
      } else {
        setErrorMessage("Thêm lịch thất bại: " + response.data.message);
      }
    } catch (error) {
      console.error("Failed to save schedule", error);
      setErrorMessage("Có lỗi khi thêm lịch");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);
    try {
      const response = await axios.delete(`${API_URL}/api/schedule/consultant-schedules/${id}`);
      if (response.data.success) {
        setSuccessMessage("Xóa lịch thành công!");
        await fetchSchedules();
      } else {
        setErrorMessage("Xóa lịch thất bại");
      }
    } catch (error) {
      console.error("Failed to delete schedule", error);
      setErrorMessage("Có lỗi khi xóa lịch");
    } finally {
      setLoading(false);
    }
  };

  const uniqueDates = getUniqueDates(schedules);
  const todayStr = new Date().toISOString().split("T")[0];
  const filteredDates = uniqueDates.filter(dateStr => dateStr >= todayStr);

  return (
    <Container className="schedule-container">
      <NavBar />
      <div className="white-schedule-card">
        <Card.Body>
          <h5 className="week-title">Lịch làm việc của bạn</h5>

          {successMessage && <Alert variant="success" onClose={() => setSuccessMessage(null)} dismissible>{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>{errorMessage}</Alert>}

          <div className="mb-3">
            <Button variant="primary" onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? "Đóng thêm lịch" : "Thêm lịch mới"}
            </Button>
          </div>

          {showAddForm && (
            <Card className="mt-3 p-3 border-secondary">
              <h6>Thêm lịch làm việc</h6>
              <Form>
                <Row className="align-items-center g-3">
                  <Col xs={12} md={4}>
                    <Form.Label>Chọn ngày</Form.Label>
                    <Form.Control 
                      type="date"
                      value={manualDate}
                      min={todayStr}
                      onChange={(e) => setManualDate(e.target.value)}
                      disabled={loading}
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Label>Chọn khung giờ</Form.Label>
                    <Form.Select
                      value={manualSlot}
                      onChange={(e) => setManualSlot(e.target.value)}
                      disabled={loading}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={12} md={4} className="d-flex align-items-end position-relative">
                    <Button
                      style={{position:'absolute', right:0,bottom:10}}
                      variant="primary"
                      onClick={handleManualAdd}
                      disabled={loading || !manualDate}
                    >
                      {loading ? 'Đang xử lý...' : 'Thêm lịch'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          )}

          <Card className="mt-4 p-3 border-primary">
            {filteredDates.length === 0 ? (
              <p className="text-muted">Chưa có lịch làm việc nào</p>
            ) : (
              <div className="schedule-grid-wrapper">
                <div className="week-header">
                  <div className="day-header empty-cell">Khung giờ</div>
                  {filteredDates.map(date => (
                    <div
                      key={date}
                      className="day-header"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowAddForm(true);
                        setManualDate(date);
                      }}
                    >
                      {formatDateDisplay(date)}
                    </div>
                  ))}
                </div>
                <div className="divider"></div>
                <div className="time-slots-container">
                  {timeSlots.map(slot => (
                    <div key={slot} className="time-slot-row">
                      <div className="time-label">{slot}</div>
                      {filteredDates.map(date => {
                        const matchingSchedule = schedules.find(sch => {
                          const schDate = sch.available_date.split("T")[0];
                          return (
                            schDate === date &&
                            sch.start_time === timeSlotMap[slot].start_time &&
                            sch.end_time === timeSlotMap[slot].end_time
                          );
                        });
                        return (
                          <div
                            key={`${date}-${slot}`}
                            className={`time-slot-cell ${matchingSchedule ? "selected" : ""}`}
                          >
                            {matchingSchedule && (
                              <>
                                <span className="checkmark">✓</span>
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  className="btn-delete-slot"
                                  disabled={loading}
                                  onClick={() => handleDelete(matchingSchedule.id)}
                                >
                                  Xóa
                                </Button>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </Card.Body>
      </div>
    </Container>
  );
};

export default SchedulePage;

import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { Container, Row, Col, Image, ListGroup, Spinner, Alert } from "react-bootstrap";
import "../styles/user-profile.css";

type ExpertProfile = {
  id: string;
  expertise: string;
  experience_years: number;
  user_id: string;
  certifications: string;
  date_of_birth: string;
  description: string;
  gender: string;
  major: string;
  workplace: string;
  account_balance: string;
  username: string;
};

type StudentProfile = {
  id: string;
  full_name: string;
  age: number;
  dob: string;
  phone_number: string;
  account_balance: string;
  user_id: string;
};

type UserRole = "Expert" | "Student" | null;

export default function UserProfileFacebook() {
  const [role, setRole] = useState<UserRole>(null);
  const [id, setId] = useState<string | null>(null);
  const [expertData, setExpertData] = useState<ExpertProfile | null>(null);
  const [studentData, setStudentData] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const API_URL = import.meta.env.VITE_AN_API_URL;

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        if (userData.role === "Expert" || userData.role === "Student") {
          setRole(userData.role);
          setId(userData.id.toString());
        } else {
          setError("Vai trò không hợp lệ.");
          setLoading(false);
        }
      } catch {
        setError("Lỗi đọc dữ liệu người dùng.");
        setLoading(false);
      }
    } else {
      setError("Chưa đăng nhập.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!role || !id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (role === "Expert") {
          const res = await fetch(`${API_URL}/api/data/Expert/${id}`);
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setExpertData(json.data[0]);
          } else {
            setError("Không tìm thấy dữ liệu chuyên gia.");
          }
        } else if (role === "Student") {
          const res = await fetch(`${API_URL}/api/data/Student/${id}`);
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setStudentData(json.data[0]);
          } else {
            setError("Không tìm thấy dữ liệu học sinh.");
          }
        }
      } catch {
        setError("Lỗi khi lấy dữ liệu từ server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [role, id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  const formatCurrency = (amount: number | string) => {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    return num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };

  const avatarPlaceholder = "https://i.pravatar.cc/150?img=65";
  const coverPlaceholder = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80";

  if (loading)
    return (
      <div className="fb_profile-page">
        <NavBar />
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
          <Spinner animation="border" role="status" variant="primary" />
          <span className="ms-3 fs-5 fw-semibold text-primary">Đang tải dữ liệu...</span>
        </Container>
      </div>
    );

  if (error)
    return (
      <div className="fb_profile-page">
        <NavBar />
        <Container className="mt-5">
          <Alert variant="danger" className="text-center shadow-sm p-4 rounded">
            <h4>Lỗi</h4>
            <p>{error}</p>
          </Alert>
        </Container>
      </div>
    );

  const expertInfoCard = expertData && (
    <>
      <h2 className="mb-3">{expertData.username}</h2>
      <p className="text-muted fst-italic">{expertData.description}</p>
      <ListGroup variant="flush" className="mb-4">
        <ListGroup.Item><strong>Chuyên môn:</strong> {expertData.expertise}</ListGroup.Item>
        <ListGroup.Item><strong>Kinh nghiệm:</strong> {expertData.experience_years} năm</ListGroup.Item>
        <ListGroup.Item><strong>Chứng chỉ:</strong> {expertData.certifications}</ListGroup.Item>
        <ListGroup.Item><strong>Ngày sinh:</strong> {formatDate(expertData.date_of_birth)}</ListGroup.Item>
        <ListGroup.Item><strong>Giới tính:</strong> {expertData.gender}</ListGroup.Item>
        <ListGroup.Item><strong>Ngành học:</strong> {expertData.major}</ListGroup.Item>
        <ListGroup.Item><strong>Nơi làm việc:</strong> {expertData.workplace}</ListGroup.Item>
        <ListGroup.Item><strong>Số dư tài khoản:</strong> {formatCurrency(expertData.account_balance)}</ListGroup.Item>
      </ListGroup>
    </>
  );

  const studentInfoCard = studentData && (
    <>
      <h2 className="mb-3">{studentData.full_name}</h2>
      <ListGroup variant="flush" className="mb-4">
        <ListGroup.Item><strong>Tuổi:</strong> {studentData.age} tuổi</ListGroup.Item>
        <ListGroup.Item><strong>Ngày sinh:</strong> {formatDate(studentData.dob)}</ListGroup.Item>
        <ListGroup.Item><strong>Số điện thoại:</strong> {studentData.phone_number}</ListGroup.Item>
        <ListGroup.Item><strong>Số dư tài khoản:</strong> {formatCurrency(studentData.account_balance)}</ListGroup.Item>
      </ListGroup>
    </>
  );

  return (
    <div className="fb_profile-page">
      <NavBar />
      <Container className="fb_profile-container my-5 p-4 bg-white rounded shadow-sm">
        <Row className="align-items-center">
          {/* Avatar */}
          <Col md={3} className="text-center">
            <Image
              src={avatarPlaceholder}
              roundedCircle
              alt="User Avatar"
              style={{ width: "160px", height: "160px", objectFit: "cover", border: "5px solid white", boxShadow: "0 4px 12px rgb(0 0 0 / 0.15)" }}
            />
          </Col>

          {/* Profile Info */}
          <Col md={9}>
            {role === "Expert" ? expertInfoCard : studentInfoCard}
          </Col>
        </Row>
                {/* Cover Photo */}
        <div
          className="fb_cover-photo rounded mb-4"
          style={{ backgroundImage: `url(${coverPlaceholder})`, height: "260px", backgroundSize: "cover", backgroundPosition: "center" }}
          aria-label="Cover photo"
        ></div>
      </Container>
    </div>
  );
}

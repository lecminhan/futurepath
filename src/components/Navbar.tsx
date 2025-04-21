import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreDropdown from './MoreDropdown';
import SearchButton from './SeachButton';

interface User {
  id: number;
  email: string;
  role: string;
  username?: string; // Optional username
}

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Trạng thái theo dõi liên kết nào đang hover
  const [user, setUser] = useState<User | null>(null); // Trạng thái lưu thông tin người dùng
  const navigate = useNavigate();

  // Kiểm tra xem người dùng đã đăng nhập chưa và lấy thông tin người dùng từ localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Lưu thông tin người dùng nếu có
    }
  }, []);

  // Xử lý đăng xuất
  const handleLogout = () => {
    // Xóa thông tin người dùng và token khỏi localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('user');

    setUser(null); // Xóa thông tin người dùng trong state

    // Chuyển hướng về trang login
    navigate('/login');
  };

  const style = (link: string) => ({
    textDecoration: 'none',
    fontWeight: 'normal',
    transition: 'all 0.3s ease-in-out',
    color: 'white',
    transform: hoveredLink === link ? 'scale(1.1)' : 'scale(1)'
  });

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold text-white">
          <span className="text-primary">Future</span>Path
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white nav-link" style={style('homepage')} onMouseEnter={() => setHoveredLink('homepage')} onMouseLeave={() => setHoveredLink(null)}>
              Homepage
            </Link>
            <Link to="/quizzes" className="text-white nav-link" style={style('quizzes')} onMouseEnter={() => setHoveredLink('quizzes')} onMouseLeave={() => setHoveredLink(null)}>
              Quizzes
            </Link>
            <Nav.Link href="/community" className="text-white nav-link" style={style('community')} onMouseEnter={() => setHoveredLink('community')} onMouseLeave={() => setHoveredLink(null)}>
              Community
            </Nav.Link>
            <Nav.Link href="/chatpage" className="text-white nav-link" style={style('degrees')} onMouseEnter={() => setHoveredLink('degrees')} onMouseLeave={() => setHoveredLink(null)}>
            Talk to AI
            </Nav.Link>
            <MoreDropdown />
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link className="text-white me-3">
              <SearchButton />
            </Nav.Link>

            {/* Nếu người dùng đã đăng nhập, hiển thị dropdown với tên người dùng */}
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="link" className="text-white nav-link" style={{ marginRight: '20px' }}>
                  {user.username} <span className="caret"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ borderRadius: '10px' }}>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              // Nếu chưa đăng nhập, hiển thị nút "Login"
              <Nav.Link href="/login" className="text-white me-3 ms-auto" style={style('login')} onMouseEnter={() => setHoveredLink('login')} onMouseLeave={() => setHoveredLink(null)}>
                Log in
              </Nav.Link>
            )}

            <Button variant="light" className="fw-bold">
              Take the free test
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import React, { useState } from 'react';
export default function NavBar() {
  const [hovered, setHovered] = useState(false);

  const style = {
    textDecoration: 'none', // Xóa gạch chân
    fontWeight: 'normal',    // Font bình thường
    transition: 'all 0.3s ease-in-out', // Thêm transition cho hiệu ứng mượt mà
    color: hovered ? 'lightblue' : 'white',  // Đổi màu khi hover
    transform: hovered ? 'scale(1.1)' : 'scale(1)', // Tăng kích thước khi hover
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top">
      <Container fluid> 
        <Navbar.Brand href="/" className="fw-bold text-white">
          Career<span className="text-primary">Explorer</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Homepage</Nav.Link>
            <Link to='/quizzes'className='text-white nav-link'  
                  style={style}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}> Quizzes
            </Link>
            <Nav.Link href="/organizations" className="text-white">For Organizations</Nav.Link>
            <Nav.Link href="/degrees" className="text-white">Degrees</Nav.Link>
            <Nav.Link href="/community" className="text-white">Community</Nav.Link>
            <Nav.Link href="/more" className="text-white">More</Nav.Link>
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link href="/search" className="text-white me-3"><SearchIcon/></Nav.Link>
            <Nav.Link href="/login" className="text-white me-3 ms-auto">Log In</Nav.Link>
            <Button variant="light" className="fw-bold">Take the free test</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
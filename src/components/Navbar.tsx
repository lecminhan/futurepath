
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import React, { useState } from 'react';
import MoreDropdown from './MoreDropdown';
import SearchButton from './SeachButton';
export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Trạng thái theo dõi liên kết nào đang hover

  const style  = (link: string) =>( {
    textDecoration: 'none',
    fontWeight: 'normal',
    transition: 'all 0.3s ease-in-out',
    color: 'white',
    transform: hoveredLink === link ? 'scale(1.1)' : 'scale(1)',
  });
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top" >
      <Container fluid> 

        <Navbar.Brand href="/" className="fw-bold text-white">
          Career<span className="text-primary">Explorer</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link 
             to="/" 
             className="text-white nav-link"
             style={style('homepage')} // Gán style cho liên kết Homepage
             onMouseEnter={() => setHoveredLink('homepage')} // Khi hover vào Homepage
             onMouseLeave={() => setHoveredLink(null)} // Khi rời khỏi Homepage
            >
              Homepage
            </Link>
            <Link 
              to="/quizzes" 
              className="text-white nav-link"
              style={style('quizzes')} 
              onMouseEnter={() => setHoveredLink('quizzes')} 
              onMouseLeave={() => setHoveredLink(null)} 
            >
              Quizzes
            </Link>
            <Nav.Link 
            href="/degrees"    
            className="text-white nav-link"
              style={style('degrees')} 
              onMouseEnter={() => setHoveredLink('degrees')} 
              onMouseLeave={() => setHoveredLink(null)} >Degrees</Nav.Link>
            <Nav.Link href="/community"    
            className="text-white nav-link"
              style={style('community')} 
              onMouseEnter={() => setHoveredLink('community')} 
              onMouseLeave={() => setHoveredLink(null)} >Community</Nav.Link>
            <MoreDropdown/>
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link  className="text-white me-3"><SearchButton/></Nav.Link>
            <Nav.Link 
            href="/login"
               className="text-white me-3 ms-auto"
              style={style('login')} 
              onMouseEnter={() => setHoveredLink('login')} 
              onMouseLeave={() => setHoveredLink(null)}>Log in</Nav.Link>
            <Button variant="light" className="fw-bold">Take the free test</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

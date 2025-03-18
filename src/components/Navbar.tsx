import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-white">
          Career<span className="text-primary">Explorer</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Homepage</Nav.Link>
            <Nav.Link href="/quizzes" className="text-white">Careers Quizzes</Nav.Link>
            <Nav.Link href="/organizations" className="text-white">For Organizations</Nav.Link>
            <Nav.Link href="/degrees" className="text-white">Degrees</Nav.Link>
            <Nav.Link href="/community" className="text-white">Community</Nav.Link>
            <Nav.Link href="/more" className="text-white">More</Nav.Link>
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link href="/search" className="text-white me-3">🔍</Nav.Link>
            <Nav.Link href="/login" className="text-white me-3 ms-auto">Log In</Nav.Link>
            <Button variant="light" className="fw-bold">Take the free test</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

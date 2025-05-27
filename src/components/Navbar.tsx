import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MoreDropdown from "./MoreDropdown";
import SearchButton from "../components/SeachButton";

import NotificationDropdown from "../components/Notifications/notificationsDropdown"; // Import the NotificationDropdown component

interface User {
  id: number;
  email: string;
  role: string;
  username?: string; // Optional username
}

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Track hovered links
  const [user, setUser] = useState<User | null>(null); // Store user data
  const navigate = useNavigate();

  // Check if user is logged in and handle redirection based on role
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData); // Save user data
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    // Remove user data and token from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("user");

    setUser(null); // Clear user data from state
    navigate("/login"); // Redirect to homepage after logout
  };

  const style = (link: string) => ({
    textDecoration: "none",
    fontWeight: "normal",
    transition: "all 0.3s ease-in-out",
    color: "white",
    transform: hoveredLink === link ? "scale(1.1)" : "scale(1)",
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
            {/* Display these links only if user is not "Expert" */}
            {(!user || user.role !== "Expert") && (
              <>
                <Link to="/" className="text-white nav-link" style={style("homepage")} onMouseEnter={() => setHoveredLink("homepage")} onMouseLeave={() => setHoveredLink(null)}>
                  Trang chủ
                </Link>
                <Link to="/quizzes" className="text-white nav-link" style={style("quizzes")} onMouseEnter={() => setHoveredLink("quizzes")} onMouseLeave={() => setHoveredLink(null)}>
                  Bài Quizzes
                </Link>
                <Nav.Link href="/community" className="text-white nav-link" style={style("community")} onMouseEnter={() => setHoveredLink("community")} onMouseLeave={() => setHoveredLink(null)}>
                  Cộng đồng
                </Nav.Link>
              </>
            )}

            {/* Display these links if the user is "Expert" */}
            {user && user.role === "Expert" && (
              <>
                <Link to="/overview" className="text-white nav-link" style={style("overview")} onMouseEnter={() => setHoveredLink("overview")} onMouseLeave={() => setHoveredLink(null)}>
                  Tổng quan
                </Link>
                <Link to="/revenue" className="text-white nav-link" style={style("revenue")} onMouseEnter={() => setHoveredLink("revenue")} onMouseLeave={() => setHoveredLink(null)}>
                  Doanh thu
                </Link>
                <Link to="/schedule" className="text-white nav-link" style={style("schedule")} onMouseEnter={() => setHoveredLink("schedule")} onMouseLeave={() => setHoveredLink(null)}>
                  Sắp xếp lịch
                </Link>
                <Link to="/messages" className="text-white nav-link" style={style("messages")} onMouseEnter={() => setHoveredLink("messages")} onMouseLeave={() => setHoveredLink(null)}>
                  Tin nhắn
                </Link>
                <Link to="/forumpost" className="text-white nav-link" style={style("forum")} onMouseEnter={() => setHoveredLink("forum")} onMouseLeave={() => setHoveredLink(null)}>
                  Diễn Đàn
                </Link>
              </>
            )}

            {/* For non-Expert users, show AI Chat and MoreDropdown */}
            {user && user.role !== "Expert" && (
              <>
                <Nav.Link href="/chatpage" className="text-white nav-link" style={style("chatpage")} onMouseEnter={() => setHoveredLink("chatpage")} onMouseLeave={() => setHoveredLink(null)}>
                  Trò chuyện với AI
                </Nav.Link>
                <MoreDropdown />
              </>
            )}
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link className="text-white me-3">
              <SearchButton />
            </Nav.Link>

            {/* Display dropdown with username if logged in */}
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="link" className="text-white nav-link" style={{ marginRight: "20px" }}>
                  {user.username} <span className="caret"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ borderRadius: "10px" }}>
                  <Dropdown.Item href="/user/:userId">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link href="/login" className="text-white me-3 ms-auto" style={style("login")} onMouseEnter={() => setHoveredLink("login")} onMouseLeave={() => setHoveredLink(null)}>
                Log in
              </Nav.Link>
            )}

            {/* Notification dropdown */}
            {user ? (
              <NotificationDropdown userId={user.id} userRole={user.role}  />
            ) : (
              <Button variant="light" className="fw-bold">
                Take the free test
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

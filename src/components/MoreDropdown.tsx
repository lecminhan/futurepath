import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

const MoreDropdown: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Trạng thái theo dõi liên kết nào đang hover
  const style = (link: string) => ({
    textDecoration: 'none',
    fontWeight: 'normal',
    transition: 'all 0.3s ease-in-out',
    color: 'white',
    transform: hoveredLink === link ? 'scale(1.1)' : 'scale(1)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    padding: '8px 16px',
    display: 'inline-block'
  });
  return (
    <div className="dropdown-hover position-relative d-inline-block" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      {/* Toggle button */}
      <Link
        to="#"
        className="text-white nav-link"
        style={style('#')} // Gán style cho liên kết Homepage
        onMouseEnter={() => setHoveredLink('#')} // Khi hover vào Homepage
        onMouseLeave={() => setHoveredLink(null)} // Khi rời khỏi Homepage
      >
        Xem thêm
        <span
          className="ms-2 dropdown-arrow"
          style={{
            display: 'inline-block',
            width: 0,
            height: 0,
            verticalAlign: 'middle',
            borderTop: '0.3em solid white',
            borderRight: '0.3em solid transparent',
            borderLeft: '0.3em solid transparent',
            transition: 'transform 0.3s ease'
          }}
        />
      </Link>

      {/* Dropdown menu */}
      <div
        className="dropdown-menu-custom"
        style={{
          border: 'none',
          borderRadius: '8px',
          padding: '0',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          position: 'absolute',
          top: '100%',
          left: '0',
          zIndex: 1000,
          minWidth: '160px',
          backgroundColor: 'white',
          opacity: showDropdown ? 1 : 0,
          transform: showDropdown ? 'translateY(0) scaleY(1)' : 'translateY(-10px) scaleY(0.9)',
          transformOrigin: 'top center',
          visibility: showDropdown ? 'visible' : 'hidden',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)'
        }}
      >
        <Link
          to="/job"
          className="dropdown-item py-2 px-3 d-block text-decoration-none"
          style={{
            color: '#333',
            transition: 'background-color 0.2s ease'
          }}
        >
          Công việc
        </Link>
        <Link
          to="/expert"
          className="dropdown-item py-2 px-3 d-block text-decoration-none"
          style={{
            color: '#333',
            transition: 'background-color 0.2s ease'
          }}
        >
          Chuyên gia
        </Link>
        <Link
          to="/forumpost"
          className="dropdown-item py-2 px-3 d-block text-decoration-none"
          style={{
            color: '#333',
            transition: 'background-color 0.2s ease'
          }}
        >
          Diễn Đàn
        </Link>
      </div>
    </div>
  );
};

export default MoreDropdown;

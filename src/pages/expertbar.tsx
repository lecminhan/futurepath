import React from "react";
import "./Styles/expert.css";
import { useNavigate } from "react-router-dom";


const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Lịch hẹn", active: false },
  { label: "Tin nhắn", active: false },
  { label: "Doanh thu", active: false },
  { label: "Cài đặt", active: false },
];

export default function ExpertBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="expert-navbar">
        <div className="expert-logo">
          <span className="logo-blue">Puture</span>
          <span className="logo-white">Path</span>
        </div>
        <div className="expert-user">
          <span className="expert-username">Bangphan2209</span>
          <div className="expert-avatar"></div>
        </div>
      </nav>
      <aside className="expert-menu">
        <h2 className="expert-menu-title">Quản lý</h2>
        <ul>
          {menuItems.map((item, idx) => (
            <li key={item.label}>
              <button
                className={`expert-menu-btn${item.active ? " active" : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <aside className="expert-menu">
      <div className="expert-menu-title">
        {/* <span className="logo-blue">Future</span> */}
        <span className="logo-black">Quản lý</span>
      </div>
      <ul>
        <li>
          <button
            className="expert-menu-btn"
            onClick={() => navigate("/uiexpert")}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            className="expert-menu-btn"
            onClick={() => navigate("/lichhen")}
          >
            Lịch hẹn
          </button>
        </li>
        <li>
          <button
            className="expert-menu-btn"
            onClick={() => navigate("/hoidap")}
          >
            Tin Nhắn
          </button>
        </li>
        <li>
          <button
            className="expert-menu-btn"
            onClick={() => navigate("/duan")}
          >
            Doanh thu
          </button>
        </li>
        <li>
          <button
            className="expert-menu-btn"
            onClick={() => navigate("/cauhinh")}
          >
            Cài đặt
          </button>
        </li>
      </ul>
    </aside>    
    </>
  );
}
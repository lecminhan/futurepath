import React from "react";
import ExpertBar from "./expertbar";
import "./Styles/lichhen.css";

const appointments = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  date: "Thứ 5, ngày 22/05/2025 - 10.00 AM",
  name: "Phan Văn Bằng",
  role: "Nhóm ESTJ - Người điều hành",
  type: "Hình thức: Online",
  tool: "Phương tiện: Zoom",
  avatar: "/avatar-doctor.png", // Đổi link ảnh avatar tương ứng
}));

export default function LichHen() {
  return (
    <div className="lichhen-layout">
      <ExpertBar />
      <main className="lichhen-main">
        <section className="lichhen-section">
          <div className="lichhen-grid">
            {appointments.map((item) => (
              <div className="lichhen-card" key={item.id}>
                <div className="lichhen-time">{item.date}</div>
                <div className="lichhen-content">
                  <img
                    className="lichhen-avatar"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div className="lichhen-info">
                    <div className="lichhen-name">{item.name}</div>
                    <div className="lichhen-role">{item.role}</div>
                    <div className="lichhen-type">{item.type}</div>
                    <div className="lichhen-tool">{item.tool}</div>
                  </div>
                </div>
                <div className="lichhen-actions">
                  <button className="lichhen-btn lichhen-btn-primary">
                    Đồng ý
                  </button>
                  <button className="lichhen-btn lichhen-btn-outline">
                    Hẹn lịch lại
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lichhen-pagination">
            <button className="lichhen-page-btn">&lt;</button>
            <button className="lichhen-page-btn lichhen-page-btn-active">
              1
            </button>
            <button className="lichhen-page-btn">2</button>
            <span className="lichhen-page-dot">...</span>
            <button className="lichhen-page-btn">&gt;</button>
          </div>
        </section>
      </main>
    </div>
  );
}
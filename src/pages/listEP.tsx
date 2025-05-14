import React, { useEffect, useState } from 'react';
import './Styles/listEP.css';
import MainLayout from '../layouts/MainLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import { getExperts } from '../services/expertService'; // Import service

// Interface để xác định kiểu dữ liệu chuyên gia
interface Expert {
  id: number;
  username: string;
  expertise: string;
  description: string;
  gender: string;
  major: string;
}

const ListEP: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [experts, setExperts] = useState<Expert[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // useEffect để gọi API và lấy dữ liệu chuyên gia
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const expertData = await getExperts(); // Gọi API từ service
        setExperts(expertData); // Cập nhật dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu chuyên gia:", error);
      }
    };

    fetchExperts();
  }, []);

  // Hàm chuyển trang
  const totalPages = Math.ceil(experts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = experts.slice(startIndex, endIndex);

  // Hàm xử lý khi nhấn vào một menu
  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  // Hàm khi nhấn vào nút "Đặt ngay"
  const handleBookNowClick = (id: number) => {
    navigate(`/expert/${id}`);
  };

  // Hàm khi nhấn vào nút "Xem thêm"
  const handleViewMoreClick = (id: number) => {
    console.log(`View more clicked for item ${id}`);
  };

  // Menu cho sidebar
  const menuItems = [
    { label: "Danh sách chuyên gia", path: "/expert" },
    { label: "Tin nhắn với chuyên gia", path: "/messages" },
  ];

  return (
    <MainLayout>
      <div className="listEP-container">
        <aside className="sidebar">
          <h3 className="sidebar-title">Chuyên mục</h3>
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`sidebar-menu-item ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => handleMenuClick(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        <main className="main-content">
          <h2>Danh sách chuyên gia</h2>

          <div className="card-grid">
            {Array.isArray(currentItems) && currentItems.map((expert) => (
              <div className="card" key={expert.id}>
                <img
                  src={
                    expert.gender === 'male'
                      ? 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                      : 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png'
                  }
                  alt="Avatar"
                  className="card-image"
                />
                <div className="card-content">
                  <h4 className="card-title">{expert.username}</h4> {/* Hiển thị username */}
                  <p className="card-description">{expert.description}</p> {/* Hiển thị description */}
                   {/* Hiển thị major và gender */}
                  <div className="card-footer">
                    <span className="major">Chuyên ngành: {expert.major}</span> {/* Hiển thị major */}
                    <span className="gender">{expert.gender}</span> {/* Hiển thị gender */}
                  </div>

                  <div className="card-actions">
                    <button onClick={() => handleBookNowClick(expert.id)}>Đặt ngay</button>
                    <button className="secondary" onClick={() => handleViewMoreClick(expert.id)}>Xem thêm</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Trước</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Sau</button>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default ListEP;

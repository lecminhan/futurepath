import React, { useState } from 'react';
import './Styles/listEP.css';
import MainLayout from '../layouts/MainLayout';
import { useNavigate, useLocation } from 'react-router-dom';

const ListEP: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const handleBookNowClick = (id: number) => {
    navigate(`/expert/${id}`);
  };
  

  const handleViewMoreClick = (id: number) => {
    console.log(`View more clicked for item ${id}`);
  };

  const items = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: "Phan Văn Bằng",
    description: "Chuyên gia định hướng nghề nghiệp toàn diện, đồng hành cùng bạn từ chọn ngành đến xây dựng lộ trình phát triển.",
    price: "200.000/2h",
    author: "William Wong",
    image: "https://studiochupanhdep.com/Upload/Newsimages/anh-nu-doanh-nhan-35.jpg",
  }));

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

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
            {currentItems.map(item => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="Thumbnail" className="card-image" />
                <div className="card-content">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-description">{item.description}</p>

                  <div className="card-footer">
                    <span className="author">{item.author}</span>
                    <span className="price">{item.price}</span>
                  </div>

                  <div className="card-actions">
                  <button onClick={() => handleBookNowClick(item.id)}>Đặt ngay</button>
                  <button className="secondary" onClick={() => handleViewMoreClick(item.id)}>Xem thêm</button>
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

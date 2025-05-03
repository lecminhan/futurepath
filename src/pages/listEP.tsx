import React from 'react';
import './Styles/listEP.css';
import MainLayout from '../layouts/MainLayout';

const ListEP: React.FC = () => {
  const handleMenuClick = (menu: string) => {
    console.log(`Menu clicked: ${menu}`);
  };

  const handleBookNowClick = (id: number) => {
    console.log(`Book now clicked for item ${id}`);
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
    image: "https://studiochupanhdep.com/Upload/Newsimages/anh-nu-doanh-nhan-35.jpg", // Placeholder image
  }));

  return (
    <MainLayout>
    <div className="listEP-container">
      <aside className="sidebar">
        <div className="search-section">
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>
        <div className="menu-section">
          <h3>MENU</h3>
          <ul>
            <li onClick={() => handleMenuClick("Hướng nghiệp tổng quát")}>
              <i className="icon">&#128712;</i>
              Hướng nghiệp tổng quát
            </li>
            <li
              className="active"
              onClick={() => handleMenuClick("Tư vấn chọn ngành học")}
            >
              <i className="icon">&#128200;</i>
              Tư vấn chọn ngành học
            </li>
            <li onClick={() => handleMenuClick("Tư vấn nghề nghiệp & thị trường việc làm")}>
              <i className="icon">&#128188;</i>
              Tư vấn nghề nghiệp & thị trường việc làm
            </li>
            <li onClick={() => handleMenuClick("Tư vấn du học")}>
              <i className="icon">&#127758;</i>
              Tư vấn du học
            </li>
          </ul>
        </div>
      </aside>
      <main className="main-content">
        <div className="scrollable-content">
          <div className="card-grid">
            {items.map(item => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="Thumbnail" className="card-image" />
                <div className="card-content">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-description">{item.description}</p>
                  <div className="card-footer">
                    <div className="author-info">
                      <span>{item.author}</span>
                    </div>
                    <span className="card-price">{item.price}</span>
                  </div>
                  <div className="card-actions">
                    <button
                      className="button primary"
                      onClick={() => handleBookNowClick(item.id)}
                    >
                      Đặt ngay
                    </button>
                    <button
                      className="button secondary"
                      onClick={() => handleViewMoreClick(item.id)}
                    >
                      Xem thêm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button className="pagination-button">Trước</button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <button className="pagination-button">4</button>
            <button className="pagination-button">Sau</button>
          </div>
        </div>
      </main>
    </div>
    </MainLayout>
  );
};

export default ListEP;
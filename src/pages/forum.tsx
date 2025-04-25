import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Forum: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>("Câu hỏi");
  const [activePage, setActivePage] = useState<number>(1); // Track active page
  const totalPages = 3; // Total number of pages

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <MainLayout>
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "20%",
          borderRight: "1px solid #e0e0e0",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Tìm kiếm"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          />
        </div>
        <nav style={{ marginTop: "20px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>MENU</strong>
            </li>
            {["Câu hỏi", "Câu chuyện người dùng", "Chia sẻ từ chuyên gia"].map(
              (item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => handleButtonClick(item)}
                    style={{
                      backgroundColor:
                        activeButton === item ? "#F5F5F5" : "transparent",
                      border: "none",
                      color: "#333",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      padding: "10px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>
                      {item === "Câu hỏi"
                        ? "❓"
                        : item === "Câu chuyện người dùng"
                        ? "📝"
                        : "🌟"}
                    </span>
                    {item}
                  </button>
                </li>
              )
            )}
            <li style={{ marginBottom: "10px" }}>
              <strong>CÁ NHÂN</strong>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleButtonClick("Câu hỏi của bạn")}
                style={{
                  backgroundColor:
                    activeButton === "Câu hỏi của bạn" ? "#F5F5F5" : "transparent",
                  border: "none",
                  color: "#333",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <span style={{ marginRight: "8px" }}>📌</span> Câu hỏi của bạn
              </button>
            </li>
          </ul>
        </nav>
        <footer style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span>📷</span>
            <span>📘</span>
            <span>📁</span>
          </div>
        </footer>
      </aside>

      {/* Main Content */}
      <main style={{ width: "50%", padding: "20px", boxSizing: "border-box" }}>
        {/* Post Input Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            backgroundColor: "#F5F5F5",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <img
            src=""
            alt="User Avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Hãy chia sẻ những điều bạn đang nghĩ nhé..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          />
          <button
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Tạo bài đăng
          </button>
        </div>

        {/* Posts */}
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={``}
                    alt="Avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <strong style={{ display: "block" }}>
                      {index % 2 === 0
                        ? "Golangninja"
                        : index % 3 === 0
                        ? "Linusxoid"
                        : "Lola"}
                    </strong>
                    <p style={{ fontSize: "12px", color: "#777" }}>
                      {5 + index * 10} phút trước
                    </p>
                  </div>
                </div>
                <div style={{ cursor: "pointer" }}>⋮</div>
              </div>
              <h4 style={{ margin: "15px 0" }}>
                {index % 2 === 0
                  ? "How to patch KDE on FreeBSD?"
                  : "What is a difference between Java and JavaScript?"}
              </h4>
              <p style={{ color: "#555", marginBottom: "15px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                aliquet maecenas ut sit nulla.
              </p>
              <input
                type="text"
                placeholder="Nhập bình luận của bạn"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#777" }}>
                  125 👁️ 15 💬
                </span>
              </div>
            </div>
          ))}

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <button
            onClick={handlePreviousPage}
            style={{
              margin: "0 5px",
              padding: "5px 15px",
              backgroundColor: activePage > 1 ? "#0D6EFD" : "#e0e0e0",
              color: activePage > 1 ? "#fff" : "#999",
              border: "1px solid #0D6EFD",
              borderRadius: "5px",
              cursor: activePage > 1 ? "pointer" : "not-allowed",
            }}
            disabled={activePage <= 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => {
            const page = pageIndex + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                style={{
                  margin: "0 5px",
                  padding: "5px 15px",
                  backgroundColor:
                    activePage === page ? "#0D6EFD" : "transparent",
                  color: activePage === page ? "#fff" : "#007bff",
                  border: "1px solid #0D6EFD",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={handleNextPage}
            style={{
              margin: "0 5px",
              padding: "5px 15px",
              backgroundColor: activePage < totalPages ? "#0D6EFD" : "#e0e0e0",
              color: activePage < totalPages ? "#fff" : "#999",
              border: "1px solid #0D6EFD",
              borderRadius: "5px",
              cursor: activePage < totalPages ? "pointer" : "not-allowed",
            }}
            disabled={activePage >= totalPages}
          >
            {">"}
          </button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        style={{
          width: "30%",
          padding: "20px",
          boxSizing: "border-box",
          overflowY: "auto", // Add scroll behavior
          maxHeight: "calc(100vh - 40px)", // Limit height to viewport minus padding
        }}
      >
        <h4 style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "20px" }}>
          Khoá học nổi bật
        </h4>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              style={{
                marginBottom: "30px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={`https://bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/PYTHONKIDS.jpg`}
                alt="Featured"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h5 style={{ margin: "10px 0", fontSize: "18px" }}>
                  Through the Mist
                </h5>
                <p style={{ color: "#555", marginBottom: "20px" }}>
                  Travel makes you see what a tiny place you occupy in the world.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src=""
                      alt="Author"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <span>William Wong</span>
                  </div>
                  <div>9/25/2015</div>
                </div>
              </div>
            </div>
          ))}
      </aside>
    </div>
  </MainLayout>
  );
};

export default Forum;
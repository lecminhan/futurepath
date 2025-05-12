import { Line, Pie, Bar } from "react-chartjs-2";
import { useState } from "react"; 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  ChartOptions,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // Dữ liệu người dùng
  const user = {
    username: "Bangphan2923",
    avatarUrl: "https://avatars.githubusercontent.com/u/3369400?v=4",
  };

  // Dữ liệu cho biểu đồ Total Users
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "This year",
        data: [8000, 13000, 6000, 7800, 11000, 9700, 23000, 18000, 30000, 24000, 36000, 39000],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Last year",
        data: [5000, 11000, 9700, 21000, 8000, 7000, 13000, 11000, 21000, 26000, 27000, 32000],
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.3,
        fill: false,
      },
    ],
  };

  // Dữ liệu cho Traffic by Website
  const trafficByWebsiteData = [
    { website: "Google", percentage: 70 },
    { website: "YouTube", percentage: 60 },
    { website: "Instagram", percentage: 80 },
    { website: "Pinterest", percentage: 45 },
    { website: "Facebook", percentage: 30 },
    { website: "Twitter", percentage: 50 },
  ];

  // Dữ liệu cho các biểu đồ khác
  const pieChartData = {
    labels: ["United States", "Canada", "Mexico", "Other"],
    datasets: [
      {
        data: [52.1, 22.8, 13.9, 11.2],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barChartDataMarketingSEO = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Marketing & SEO",
        data: [10, 20, 15, 25, 30, 20, 15, 10, 25, 30, 35, 40],
        backgroundColor: [
          "#4BC0C0",
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#9966FF",
          "#FF9F40",
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const barChartDataDevice = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic by Device",
        data: [10, 20, 15, 25, 30, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      },
    ],
  };

  // Cài đặt options cho từng loại biểu đồ
  const lineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };

  const pieChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      legend: {
        position: "right",
        align: "start",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  const barChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f6f6f6" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#333", // Màu của AdminDashboard, đổi nền navbar thành đen nhạt
          padding: "10px 20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "#FFFFFF", // Chữ trắng cho navbar
          }}
        >
          <span style={{ color: "#0D6EFD" }}>Future</span>
          <span style={{ color: "#FFFFFF" }}>Path</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>{user.username}</span>
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid #ddd",
            }}
          />
        </div>
      </nav>

      <div style={{ display: "flex", height: "100%", backgroundColor: "#f6f6f6" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "20%",
            backgroundColor: "#ffffff", // Đổi màu nền sidebar thành đen nhạt
            padding: "20px",
            boxShadow: "0 2px 4px rgba(249, 247, 247, 0.1)",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#fff", // Chữ trắng
            }}
          >
            <span style={{ color: "#000000" }}>Admin</span>
            <span style={{ color: "#000000" }}>Dashboard</span>
          </h2>
          <p style={{ fontSize: "14px", color: "#888" }}></p>
          <button
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>
          <div style={{ position: "relative", width: "100%" }}>
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    style={{
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Quản lý
  </button>
  {showDropdown && (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "5px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {["Người dùng", "Chuyên gia", "Bài Quizzes", "Diễn đàn"].map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            borderBottom: index !== 3 ? "1px solid #eee" : "none",
            cursor: "pointer",
            color: "#000",
            backgroundColor: "#fff",
          }}
          onClick={() => {
            console.log(item); // Ở đây bạn có thể thay bằng navigate hoặc xử lý gì đó
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          {item}
        </div>
      ))}
    </div>
  )}
</div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Doanh thu
          </button>
          <button
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cộng đồng
          </button>
          <button
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cài đặt
          </button>
        </div>

        {/* Main Content */}
        <div style={{ width: "80%", padding: "20px", overflowY: "auto", maxHeight: "calc(100vh - 70px)" }}>
          {/* Stats */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            {[
              { title: "Views", value: "7,265", change: "+11.01%" },
              { title: "Visits", value: "3,671", change: "-0.03%" },
              { title: "New Users", value: "156", change: "+15.03%" },
              { title: "Active Users", value: "2,318", change: "+6.08%" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <h3>{stat.title}</h3>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{stat.value}</p>
                <p style={{ color: stat.change.includes("+") ? "green" : "red" }}>{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Line Chart */}
          <div
            style={{
              marginBottom: "20px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Total Users</h3>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

          {/* 6 Biểu đồ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {/* Traffic by Website */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h4>Traffic by Website</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {trafficByWebsiteData.map((data, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      fontSize: "16px",
                    }}
                  >
                    {/* Tên website */}
                    <span style={{ flex: 1 }}>{data.website}</span>

                    {/* Thanh biểu thị */}
                    <div
                      style={{
                        flex: 3,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          height: "4px",
                          backgroundColor: "#000",
                          width: `${data.percentage}%`,
                          marginRight: "5px",
                        }}
                      ></div>
                      <div
                        style={{
                          height: "4px",
                          backgroundColor: "#ccc",
                          flex: 1,
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traffic by Location */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>

            {/* Another Traffic by Location */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>

            {/* Marketing & SEO */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Bar data={barChartDataMarketingSEO} options={barChartOptions} />
            </div>

            {/* Traffic by Device */}
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Bar data={barChartDataDevice} options={barChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

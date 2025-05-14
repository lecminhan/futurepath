import React, { useState, useEffect } from "react";
import ExpertBar from "./expertbar";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Styles/doanhthu.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock data
const mockData = {
  salesCost: {
    sales: [300, 320, 400, 600, 700, 650, 500],
    cost: [200, 350, 300, 550, 600, 700, 650],
    totalSales: "350K",
    trend: "+8.56K",
  },
  sessions: {
    value: "16.5K",
    trend: "-3%",
  },
  orders: {
    value: "25.7K",
    trend: "+6%",
  },
  profits: {
    value: "50K",
    trend: "+12%",
  },
  reports: {
    customers: 24000,
    products: 1500,
    revenue: 250000,
  },
  userStats: {
    totalUsers: "16.5K",
    countries: [
      { country: "United States", users: 30000, trend: "+25.8%" },
      { country: "Brazil", users: 26000, trend: "-16.2%" },
      { country: "India", users: 22000, trend: "+12.3%" },
      { country: "Australia", users: 17000, trend: "-11.9%" },
    ],
  },
  transactions: [
    {
      id: "#5089",
      date: "31 March 2023",
      total: "$1200",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: "#5090",
      date: "30 March 2023",
      total: "$1100",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
    },
    {
      id: "#5091",
      date: "29 March 2023",
      total: "$1300",
      name: "Emily Johnson",
      phone: "555-123-4567",
      email: "emily.j@example.com",
    },
    {
      id: "#5092",
      date: "28 March 2023",
      total: "$1250",
      name: "Michael Brown",
      phone: "444-555-6666",
      email: "michael.brown@example.com",
    },
    {
      id: "#5093",
      date: "27 March 2023",
      total: "$1400",
      name: "Sarah Davis",
      phone: "222-333-4444",
      email: "sarah.davis@example.com",
    },
  ],
};

export default function DoanhThu() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setData(mockData);
    }, 500);
  }, []);

  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: data.salesCost.sales,
        borderColor: "#1976f7",
        backgroundColor: "rgba(25, 118, 247, 0.2)",
        tension: 0.4,
      },
      {
        label: "Cost",
        data: data.salesCost.cost,
        borderColor: "#45b3e6",
        backgroundColor: "rgba(69, 179, 230, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ["United States", "Brazil", "India", "Australia"],
    datasets: [
      {
        label: "Users",
        data: data.userStats.countries.map((c) => c.users),
        backgroundColor: ["#1976f7", "#f44336", "#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <ExpertBar />
      <div className="dashboard-content">
        <div className="row">
          {/* Total Sales & Costs */}
          <div className="card total-sales-costs">
            <h4>Total Sales & Costs</h4>
            <p>Last 7 days</p>
            <div className="metric-value">
              <span>{data.salesCost.totalSales}</span>
              <small>{data.salesCost.trend}</small>
            </div>
            <div className="chart-container">
              <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Sessions */}
          <div className="card sessions">
            <h4>Sessions</h4>
            <p>Last 7 days</p>
            <div className="metric-value">
              <span>{data.sessions.value}</span>
              <small>{data.sessions.trend}</small>
            </div>
            <div className="chart-container">
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "Sessions",
                      data: [1500, 2000, 1800, 2200, 2400, 2100, 2600],
                      borderColor: "#8e44ad",
                      backgroundColor: "rgba(142, 68, 173, 0.2)",
                      tension: 0.4,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          {/* Users in Last 30 Minutes */}
          <div className="card users-last-30-minutes">
            <h4>Users in Last 30 Minutes</h4>
            <div className="metric-value">
              <span>{data.userStats.totalUsers}</span>
            </div>
            <div className="chart-container">
              <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Reports */}
          <div className="card reports">
            <h4>Reports</h4>
            <p>Last 7 days</p>
            <div className="metric-value">
              <span>24k Customers</span>
              <span>1.5k Products</span>
              <span>250k Revenue</span>
            </div>
            <div className="chart-container">
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "Reports",
                      data: [10000, 20000, 30000, 40000, 50000, 45000, 47000],
                      borderColor: "#4caf50",
                      backgroundColor: "rgba(76, 175, 80, 0.2)",
                      tension: 0.4,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        {/* Last Transactions */}
        <div className="row">
          <div className="card full last-transactions">
            <h4>Last Transactions</h4>
            <table className="transactions">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Issued Date</th>
                  <th>Total</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.total}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.phone}</td>
                    <td>{transaction.email}</td>
                    <td>
                      <a href="#details">View Detail</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
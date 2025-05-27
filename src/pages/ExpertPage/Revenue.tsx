import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Container, Row, Col, Card, Table, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import styles from '../Styles/revenue.module.css'; // Import the CSS Module
import NavBar from "../../components/Navbar";
import '../Styles/revenue.module.css'
// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Transaction {
  transaction_id: string;
  amount: string;
  transaction_date: string;
  transaction_status: string;
  user_username: string | null;
  expert_username: string | null;
}

interface RevenueOverview {
  total_revenue_current_month: string;
  total_revenue_last_month: string;
  total_appointments_current_month: string;
  total_appointments_last_month: string;
}

interface RevenueLastThreeMonths {
  month: string;
  year: string;
  total_revenue: string;
}

const ExpertRevenue: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Initialize with empty array
  const [revenueOverview, setRevenueOverview] = useState<RevenueOverview | null>(null);
  const [revenueLastThreeMonths, setRevenueLastThreeMonths] = useState<RevenueLastThreeMonths[]>([]); // Initialize with empty array
  const [loading, setLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState(0);
  const transactionsPerPage = 10; // Number of transactions per page

  // Get the expert_id and role from localStorage
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const expertId = userData?.role === "Expert" ? userData.id : null;
  const API_URL = import.meta.env.VITE_AN_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!expertId) {
          console.error("No expert_id found in localStorage.");
          return;
        }

        // Fetch transactions
        const transactionsResponse = await axios.get(`${API_URL}/api/expert/transactions/${expertId}`);
        setTransactions(transactionsResponse.data.transactions || []); // Ensure an empty array if no data

        // Fetch revenue overview (current and last month)
        const revenueResponse = await axios.get(`${API_URL}/api/expert/revenue/${expertId}`);
        setRevenueOverview(revenueResponse.data || {}); // Ensure an empty object if no data

        // Fetch last three months revenue
        const lastThreeMonthsResponse = await axios.get(`${API_URL}/api/expert/${expertId}/revenue/last-three-months`);
        setRevenueLastThreeMonths(lastThreeMonthsResponse.data.revenue_last_three_months || []); // Ensure an empty array if no data

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [expertId]);

  const monthlyRevenueData = {
    labels: ["Tháng Này", "Tháng Trước"],
    datasets: [
      {
        label: "Doanh Thu",
        data: [
          parseFloat(revenueOverview?.total_revenue_current_month || "0"),
          parseFloat(revenueOverview?.total_revenue_last_month || "0"),
        ],
        backgroundColor: ["#42a5f5", "#66bb6a"],
      },
    ],
  };

  const threeMonthsRevenueData = {
    labels: revenueLastThreeMonths?.map((item) => `${item.month}-${item.year}`) || [],
    datasets: [
      {
        label: "Doanh Thu",
        data: revenueLastThreeMonths?.map((item) => parseFloat(item.total_revenue)) || [],
        borderColor: "#ff6347",
        fill: false,
      },
    ],
  };

  // Pagination logic for transactions
  const transactionsToDisplay = transactions.slice(
    currentPage * transactionsPerPage,
    (currentPage + 1) * transactionsPerPage
  );

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <Container className={styles['revenue-container']}>
      <NavBar />
      {loading ? (
        <div className={styles['spinner-container']}>
          <Spinner animation="border" role="status" variant="primary" />
          <span className={styles['loading-text']}>Đang tải...</span>
        </div>
      ) : (
        <>
          {/* Revenue Overview Section */}
          <Row className="my-4">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Doanh Thu (Tháng Này)</Card.Title>
                  <Card.Text className={styles['positive-revenue']}>
                    {revenueOverview?.total_revenue_current_month || "0"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Doanh Thu (Tháng Trước)</Card.Title>
                  <Card.Text className={styles['positive-revenue']}>
                    {revenueOverview?.total_revenue_last_month || "0"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Số Lượng Lịch Hẹn (Tháng Này)</Card.Title>
                  <Card.Text className={styles['positive-revenue']}>
                    {revenueOverview?.total_appointments_current_month || "0"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Số Lượng Lịch Hẹn (Tháng Trước)</Card.Title>
                  <Card.Text className={styles['positive-revenue']}>
                    {revenueOverview?.total_appointments_last_month || "0"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Monthly Revenue Bar Chart */}
          <Row className="my-4">
            <Col md={6}>
              <h3>So Sánh Doanh Thu (Tháng Này vs Tháng Trước)</h3>
              <Bar data={monthlyRevenueData} options={{ responsive: true }} />
            </Col>

            {/* 3 Months Revenue Line Chart */}
            <Col md={6}>
              <h3>Doanh Thu (3 Tháng Gần Nhất)</h3>
              {revenueLastThreeMonths.length > 0 ? (
                <Line data={threeMonthsRevenueData} options={{ responsive: true }} />
              ) : (
                <p>Không có dữ liệu doanh thu cho 3 tháng gần nhất.</p>
              )}
            </Col>
          </Row>

          {/* Transaction List */}
          <Row className="my-4">
            <Col>
              <h3>Danh Sách Giao Dịch</h3>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID Giao Dịch</th>
                    <th>Số Tiền</th>
                    <th>Ngày</th>
                    <th>Trạng Thái</th>
                    <th>Tên Người Dùng</th>
                    <th>Tên Chuyên Gia</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsToDisplay?.map((transaction) => (
                    <tr key={transaction.transaction_id}>
                      <td>{transaction.transaction_id}</td>
                      <td>{transaction.amount}</td>
                      <td>{new Date(transaction.transaction_date).toLocaleDateString()}</td>
                      <td>{transaction.transaction_status}</td>
                      <td>{transaction.user_username || "N/A"}</td>
                      <td>{transaction.expert_username || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>

          {/* Pagination */}
          <Row className="my-4">
            <Col>
              <ReactPaginate
                pageCount={Math.ceil(transactions.length / transactionsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={styles['custom-pagination']}
                activeClassName={styles['active-page']}
                previousLabel={"<"}
                nextLabel={">"}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ExpertRevenue;

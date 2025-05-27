import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import RevenuePieChart from '../../components/ExpertComponents/RevenuePieChart';
import ScheduleList from '../../components/ExpertComponents/ScheduleList';
import MonthlyRevenueBarChart from '../../components/ExpertComponents/MonthlyRevenueBarChart';
import DateTimeCard from '../../components/ExpertComponents/DateTimeCard';
import ClockComponent from '../../components/ExpertComponents/ClockComponents';
import '../Styles/Overview.css';
import { getUserId } from '../../utils/useridUtils';
import NavBar from '../../components/Navbar';
import axios from 'axios';

interface ExpertSchedule {
  expert_id: string;
  available_date: string;
  start_time: string;
  end_time: string;
}

interface MonthlyRevenue {
  month: string;
  year: string;
  total_revenue: string;
}

interface ExpertOverviewData {
  revenue: number;
  appointmentsCount: number;
  lastMonthAppointmentsCount: number;
  schedule: ExpertSchedule[];
  monthlyRevenue: MonthlyRevenue[];
  revenueLastMonth: number;
}

const ExpertOverview: React.FC = () => {
  const [overviewData, setOverviewData] = useState<ExpertOverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const UserId = getUserId();
  const API_URL = import.meta.env.VITE_AN_API_URL;

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const expertId = UserId;

        // Fetch schedule
        const scheduleResponse = await axios.get(`${API_URL}/api/expert/${expertId}/schedule`);
        const scheduleData: ExpertSchedule[] = scheduleResponse.data.schedule;

        // Fetch monthly revenue
        const revenueResponse = await axios.get(`${API_URL}/api/expert/revenue/${expertId}`);
        const revenueData = revenueResponse.data;

        // Fetch last three months revenue
        const lastThreeMonthsRevenueResponse = await axios.get(`${API_URL}/api/expert/${expertId}/revenue/last-three-months`);
        const lastThreeMonthsRevenue = lastThreeMonthsRevenueResponse.data.revenue_last_three_months;

        setOverviewData({
          revenue: parseFloat(revenueData.total_revenue_current_month),
          revenueLastMonth: parseFloat(revenueData.total_revenue_last_month),
          appointmentsCount: parseInt(revenueData.total_appointments_current_month),
          lastMonthAppointmentsCount: parseInt(revenueData.total_appointments_last_month),
          schedule: scheduleData,
          monthlyRevenue: lastThreeMonthsRevenue.map((item: MonthlyRevenue) => ({
            month: item.month,
            year: item.year,
            total_revenue: item.total_revenue
          }))
        });
      } catch (error) {
        console.error('Error fetching overview data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) {
    return (
      <Container className="loading-container">
        <div>Loading...</div>
      </Container>
    );
  }

  // Revenue data for the first pie chart
  const revenueData = overviewData ? [
    { name: 'Doanh Thu Tháng Này', value: overviewData.revenue },
    { name: 'Doanh Thu Tháng Trước', value: overviewData.revenueLastMonth },
  ] : [];

  // Appointments data for the second pie chart
  const appointmentsData = overviewData ? [
    { name: 'Số người đặt tháng này', value: overviewData.appointmentsCount },
    { name: 'Số người đặt tháng trước', value: overviewData.lastMonthAppointmentsCount },
  ] : [];

  const monthlyRevenueData = overviewData?.monthlyRevenue.map((data) => ({
    month: `${data.month}-${data.year}`,
    revenue: parseFloat(data.total_revenue),
  })) || [];

  return (
    <Container className="overview-container">
      <NavBar />
      <Row>
        <Col md={4}>
          <Card className="overview-card">
            <Card.Body>
              {revenueData.length > 0 ? (
                <RevenuePieChart data={revenueData} colors={['#8884d8', '#82ca9d']} title="Tổng Doanh Thu" />
              ) : (
                <div className="no-data-message">Không có dữ liệu</div>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="overview-card">
            <Card.Body>
              {appointmentsData.length > 0 ? (
                <RevenuePieChart
                  data={appointmentsData}
                  colors={['#FF7300', '#FFBB28']}
                  title="Số lượng đặt lịch"
                />
              ) : (
                <div className="no-data-message">Không có dữ liệu</div>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="overview-card">
            <Card.Body>
              <h5>Lịch làm việc tuần này</h5>
              {overviewData?.schedule && overviewData.schedule.length > 0 ? (
                <ScheduleList schedule={overviewData.schedule} />
              ) : (
                <div className="no-data-message">Không có dữ liệu</div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="overview-card">
            <Card.Body>
              <h5>Biểu đồ Doanh Thu Hàng Tháng</h5>
              {monthlyRevenueData.length > 0 ? (
                <MonthlyRevenueBarChart data={monthlyRevenueData} />
              ) : (
                <div className="no-data-message">Không có dữ liệu</div>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <ClockComponent />
        </Col>

        <Col md={3}>
          <DateTimeCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ExpertOverview;
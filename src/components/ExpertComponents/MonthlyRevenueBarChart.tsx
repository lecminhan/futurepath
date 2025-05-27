import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

interface MonthlyRevenueBarChartProps {
  data: { month: string; revenue: number }[];
}

const MonthlyRevenueBarChart: React.FC<MonthlyRevenueBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#82ca9d">
          <LabelList dataKey="revenue" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyRevenueBarChart;
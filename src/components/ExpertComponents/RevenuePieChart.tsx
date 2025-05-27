import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface RevenuePieChartProps {
  data: { name: string; value: number }[];
  colors: string[];
  title: string;
}

const RevenuePieChart: React.FC<RevenuePieChartProps> = ({ data, colors, title }) => {
  return (
    <>
      <h5 style={{textAlign:'center'}}>{title}</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenuePieChart;
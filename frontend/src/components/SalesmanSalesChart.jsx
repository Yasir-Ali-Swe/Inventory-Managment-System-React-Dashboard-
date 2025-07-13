import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const weeklySalesData = [
  { day: 'Mon', Ali: 500, Ahmed: 400, Sarah: 300 },
  { day: 'Tue', Ali: 600, Ahmed: 350, Sarah: 250 },
  { day: 'Wed', Ali: 300, Ahmed: 500, Sarah: 200 },
  { day: 'Thu', Ali: 700, Ahmed: 200, Sarah: 300 },
  { day: 'Fri', Ali: 400, Ahmed: 600, Sarah: 400 },
  { day: 'Sat', Ali: 200, Ahmed: 450, Sarah: 350 },
  { day: 'Sun', Ali: 350, Ahmed: 300, Sarah: 500 },
];

const WeeklySalesBySalesmanChart = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      background: '#081229',
      border: '1px solid #191d3a',
      borderRadius: '8px',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.25rem' ,color: '#ffffff' }}>
        Weekly Sales by Salesmen
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={weeklySalesData}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Ali" fill="#4379F2" />
          <Bar dataKey="Ahmed" fill="#5CB338" />
          <Bar dataKey="Sarah" fill="#FFCC00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklySalesBySalesmanChart;

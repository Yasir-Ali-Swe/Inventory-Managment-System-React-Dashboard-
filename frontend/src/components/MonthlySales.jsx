import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const monthlySalesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3200 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4700 },
  { month: 'May', sales: 5200 },
  { month: 'Jun', sales: 6000 },
  { month: 'Jul', sales: 5500 },
  { month: 'Aug', sales: 5800 },
  { month: 'Sep', sales: 4900 },
  { month: 'Oct', sales: 6300 },
  { month: 'Nov', sales: 6500 },
  { month: 'Dec', sales: 7000 },
];

const MonthlySales = () => {
  return (
    <div style={{
      width: '100%',
      height: '380px',
      background: '#081229',
      border: '1px solid #191d3a',
      borderRadius: '8px',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.25rem', color: '#ffffff' }}>
        Monthly Sales (Jan - Dec)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={monthlySalesData}
          margin={{ top: 10, right: 25, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#FFCC00" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySales;

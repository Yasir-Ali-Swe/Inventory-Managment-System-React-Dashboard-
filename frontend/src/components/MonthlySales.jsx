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
      height: '100%',
      minHeight: '300px',
      background: '#081229',
      border: '1px solid #191d3a',
      borderRadius: '8px',
      padding: '16px',
      boxSizing: 'border-box',
    }}>
      <h3 style={{ 
        marginBottom: '16px', 
        fontSize: '1rem', 
        color: '#ffffff',
        textAlign: 'center'
      }}>
        Monthly Sales (Jan - Dec)
      </h3>
      <div style={{ width: '100%', height: 'calc(100% - 50px)', minHeight: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlySalesData}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#191d3a" />
            <XAxis 
              dataKey="month" 
              stroke="#ffffff" 
              fontSize={12}
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              stroke="#ffffff" 
              fontSize={12}
              tick={{ fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#191d3a', 
                border: '1px solid #ec5990',
                borderRadius: '8px',
                color: '#ffffff'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#FFCC00" 
              strokeWidth={2}
              dot={{ fill: '#FFCC00', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#FFCC00', strokeWidth: 2, fill: '#FFCC00' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlySales;

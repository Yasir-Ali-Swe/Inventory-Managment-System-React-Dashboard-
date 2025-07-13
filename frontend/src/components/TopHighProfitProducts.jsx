import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// ✅ Example data: replace with real profit data later!
const topProfitProductsData = [
  { name: 'Product A', profit: 1200 },
  { name: 'Product B', profit: 900 },
  { name: 'Product C', profit: 750 },
];

const COLORS = ['#4379F2', '#5CB338', '#FFCC00'];

const TopHighProfitProducts = () => {
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
        Top High Profit Products
      </h3>
      <div style={{ width: '100%', height: 'calc(100% - 50px)', minHeight: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topProfitProductsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="profit"  // ✅ Notice: dataKey changed to "profit"
              nameKey="name"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {topProfitProductsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#191d3a', 
                border: '1px solid #ec5990',
                borderRadius: '8px',
                color: '#ffffff'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopHighProfitProducts;

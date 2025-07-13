import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const topProductsData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 250 },
];
const COLORS = ['#4379F2', '#5CB338', '#FFCC00'];

const TopThreeSalingProducts = () => {
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
            <h3 style={{ marginBottom: '20px', fontSize: '1.25rem' ,color: '#ffffff'}}>
                Top 3 Selling Products
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={topProductsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                        {topProductsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopThreeSalingProducts;


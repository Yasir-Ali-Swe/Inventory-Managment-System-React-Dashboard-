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
                Top 3 Selling Products
            </h3>
            <div style={{ width: '100%', height: 'calc(100% - 50px)', minHeight: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={topProductsData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {topProductsData.map((entry, index) => (
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

export default TopThreeSalingProducts;


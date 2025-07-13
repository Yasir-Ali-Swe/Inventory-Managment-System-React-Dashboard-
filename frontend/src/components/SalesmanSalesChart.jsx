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
        Weekly Sales by Salesmen
      </h3>
      <div style={{ width: '100%', height: 'calc(100% - 50px)', minHeight: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weeklySalesData}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#191d3a" />
            <XAxis 
              dataKey="day" 
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
            <Bar dataKey="Ali" fill="#4379F2" />
            <Bar dataKey="Ahmed" fill="#5CB338" />
            <Bar dataKey="Sarah" fill="#FFCC00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklySalesBySalesmanChart;

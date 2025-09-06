import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const TotalRevenueChart = () => {
  // Data that matches the chart exactly
  const data = [
    { name: 'Monday', onlineSales: 14, offlineSales: 12 },
    { name: 'Tuesday', onlineSales: 17, offlineSales: 11 },
    { name: 'Wednesday', onlineSales: 5, offlineSales: 22 },
    { name: 'Thursday', onlineSales: 16, offlineSales: 6 },
    { name: 'Friday', onlineSales: 12, offlineSales: 11 },
    { name: 'Saturday', onlineSales: 17, offlineSales: 13 },
    { name: 'Sunday', onlineSales: 21, offlineSales: 11 }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-[645px] h-[351px]">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900 mb-8">Total Revenue</h2>
      
      {/* Chart Container */}
      <div className="w-[589px] h-[176px]  p-0 flex justify-center mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barGap={8}
            barCategoryGap={32}
          >
            {/* Horizontal grid lines */}
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#F3F4F6" 
              horizontal={true} 
              vertical={false}
            />
            {/* Y-axis with proper styling */}
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 12, 
                fill: '#9CA3AF',
                fontWeight: 400
              }}
              domain={[0, 25]}
              tickCount={6}
              tickFormatter={(value) => `${value}k`}
            />
            
            {/* X-axis with proper styling */}
            <XAxis 
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 12, 
                fill: '#9CA3AF',
                fontWeight: 400
              }}
              dy={10}
            />
            
            {/* Online Sales Bar (Blue) */}
            <Bar 
              dataKey="onlineSales" 
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            
            {/* Offline Sales Bar (Green) */}
            <Bar 
              dataKey="offlineSales" 
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8">
        {/* Online Sales */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Online Sales</span>
        </div>

        {/* Offline Sales */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueChart;
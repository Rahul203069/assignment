import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useDashboard } from '@/Context/DashboardContext';

const fallbackRevenue = [
  { name: 'Mon', onlineSales: 14, offlineSales: 12 },
  { name: 'Tue', onlineSales: 17, offlineSales: 11 },
  { name: 'Wed', onlineSales: 5, offlineSales: 22 },
  { name: 'Thu', onlineSales: 16, offlineSales: 6 },
  { name: 'Fri', onlineSales: 12, offlineSales: 11 },
  { name: 'Sat', onlineSales: 17, offlineSales: 13 },
  { name: 'Sun', onlineSales: 21, offlineSales: 11 }
];

const TotalRevenueChart = () => {
  const { data } = useDashboard();
  const revenue = data?.totalRevenueChart || fallbackRevenue;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-box w-full max-w-full min-h-[300px]">
      
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center sm:text-left">
        Total Revenue
      </h2>

      {/* Chart Container */}
      <div className="w-full h-[250px] sm:h-[300px] flex justify-center mb-4 sm:mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenue}
            margin={{ top: 10, right: 20, left: 20, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280', fontWeight: 500 }}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={60}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280', fontWeight: 500 }}
              domain={[0, 25]}
              tickFormatter={(value) => `${value}k`}
              width={40}
            />

            <Bar dataKey="onlineSales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="offlineSales" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-medium">Offline Sales</span>
        </div>
      </div>

    </div>
  );
};

export default TotalRevenueChart;

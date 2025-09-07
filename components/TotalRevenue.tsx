import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { useDashboard } from '@/Context/DashboardContext';

const TotalRevenueChart = () => {
  // Fallback data that matches the chart exactly
  const fallbackRevenue = [
    { name: 'Monday', onlineSales: 14, offlineSales: 12 },
    { name: 'Tuesday', onlineSales: 17, offlineSales: 11 },
    { name: 'Wednesday', onlineSales: 5, offlineSales: 22 },
    { name: 'Thursday', onlineSales: 16, offlineSales: 6 },
    { name: 'Friday', onlineSales: 12, offlineSales: 11 },
    { name: 'Saturday', onlineSales: 17, offlineSales: 13 },
    { name: 'Sunday', onlineSales: 21, offlineSales: 11 }
  ];

  const { data, setData } = useDashboard();
  
  // ✅ Use fallback data if context data is not available
  const revenue = data?.totalRevenueChart || fallbackRevenue;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-box  w-full max-w-[645px] min-h-[300px] sm:min-h-[351px]">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 sm:mb-8">
        Total Revenue
      </h2>
      
      {/* Chart Container */}
      <div className="w-full h-[200px] sm:h-[176px] lg:h-[200px] flex justify-center mb-4 sm:mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenue}
            margin={{ 
              top: 0, 
              right: window.innerWidth < 640 ? 10 : 0, 
              left: window.innerWidth < 640 ? 10 : 0, 
              bottom: 0 
            }}
            barGap={window.innerWidth < 640 ? 4 : 8}
            barCategoryGap={window.innerWidth < 640 ? 16 : 32}
          >
            <CartesianGrid
              strokeDasharray="none"
              stroke="#F3F4F6"
              horizontal={true}
              vertical={false}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: window.innerWidth < 640 ? 10 : 12,
                fill: '#9CA3AF',
                fontWeight: 400
              }}
              domain={[0, 25]}
              tickCount={6}
              tickFormatter={(value) => `${value}k`}
              width={window.innerWidth < 640 ? 30 : 40}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: window.innerWidth < 640 ? 10 : 12,
                fill: '#9CA3AF',
                fontWeight: 400
              }}
              dy={10}
              interval={0}
              angle={window.innerWidth < 480 ? -45 : 0}
              textAnchor={window.innerWidth < 480 ? "end" : "middle"}
              height={window.innerWidth < 480 ? 60 : 40}
            />
            <Bar
              dataKey="onlineSales"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              barSize={window.innerWidth < 640 ? 16 : 20}
            />
            <Bar
              dataKey="offlineSales"
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              barSize={window.innerWidth < 640 ? 16 : 20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
            Online Sales
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">
            Offline Sales
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueChart;
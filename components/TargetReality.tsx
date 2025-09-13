import React from 'react';
import { ShoppingBag, Target } from 'lucide-react';
import { useDashboard } from '@/Context/DashboardContext';

const TargetVsRealityChart = () => {
  const { data } = useDashboard();
  const chartData = data?.targetVsReality;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-box w-full max-w-[400px] sm:max-w-[480px] mx-auto">
      {/* Header */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Target vs Reality</h2>
      
      {/* Chart Container */}
      <div className="mb-6">
        <div className="flex flex-wrap items-end justify-between h-40 px-2 gap-2">
          {chartData?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1 w-[12%] sm:w-[10%] min-w-[40px]">
              {/* Bars Container */}
              <div className="flex items-end gap-1 h-32 w-full">
                <div 
                  className="w-full bg-emerald-400 rounded-t-sm"
                  style={{ height: `${(item.reality / 120) * 100}%` }}
                ></div>
                <div 
                  className="w-full bg-yellow-400 rounded-t-sm"
                  style={{ height: `${(item.target / 120) * 100}%` }}
                ></div>
              </div>
              {/* Month Label */}
              <span className="text-xs text-gray-500 mt-2 truncate text-center">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend and Stats */}
      <div className="space-y-4">
        {/* Reality Sales */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
            <ShoppingBag size={18} className="text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Reality Sales</div>
            <div className="text-xs text-gray-500">Global</div>
          </div>
          <div className="text-lg font-semibold text-emerald-600">8.823</div>
        </div>

        {/* Target Sales */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
            <Target size={18} className="text-yellow-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Target Sales</div>
            <div className="text-xs text-gray-500">Commercial</div>
          </div>
          <div className="text-lg font-semibold text-yellow-600">12.122</div>
        </div>
      </div>
    </div>
  );
};

export default TargetVsRealityChart;

import React from 'react';
import ChartLegend2 from './ChartLegend2';

const VolumeServiceChart = () => {
  const data = [
    { volume: 85, services: 40 },
    { volume: 100, services: 45 },
    { volume: 75, services: 35 },
    { volume: 65, services: 40 },
    { volume: 50, services: 30 },
    { volume: 55, services: 35 }
  ];
  const maxHeight = 100;

  return (
    <div className="bg-white rounded-2xl opacity-100 z-20 p-6 sm:p-8 w-full max-w-[400px] mx-auto min-h-[349px]">
      
      {/* Title */}
      <h2 className="subtitle text-lg sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
        Volume vs Service Level
      </h2>
      
      {/* Chart Container */}
      <div className="flex items-end justify-between sm:justify-around space-x-2 sm:space-x-4 mb-6 sm:mb-8 border-b pb-4 overflow-x-auto">
        {data.map((item, index) => {
          const totalHeight = item.volume;
          const servicesHeight = item.services;
          const volumeHeight = totalHeight - servicesHeight;
          
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Stacked Bar */}
              <div className="w-[10px] sm:w-[12px] flex flex-col">
                {/* Volume (Blue) portion */}
                <div 
                  className="bg-blue-500 w-full rounded-t-sm"
                  style={{ height: `${(volumeHeight / maxHeight) * 140}px` }}
                />
                {/* Services (Green) portion */}
                <div 
                  className="bg-green-400 w-full rounded-b-sm"
                  style={{ height: `${(servicesHeight / maxHeight) * 200}px` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <ChartLegend2 />
      
    </div>
  );
};

export default VolumeServiceChart;

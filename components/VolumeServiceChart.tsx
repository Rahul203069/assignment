import React from 'react';
import ChartLegend2 from './ChartLegend2';

const VolumeServiceChart = () => {
  // Data for the bars (approximated from the image)
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
    <div style={{backgroundColor:'white'}} className="bg-white rounded-2xl z-20 p-8 w-[371px] h-[349px] ">
      {/* Title */}
      <h2 className="subtitle mb-8">
        Volume vs Service Level
      </h2>
      
      {/* Chart Container */}
      <div className="flex items-end justify-around space-x-4  mb-8 border-b pb-4">
        {data.map((item, index) => {
          const totalHeight = item.volume;
          const servicesHeight = item.services;
          const volumeHeight = totalHeight - servicesHeight;
          
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Stacked Bar */}
              <div className="w-[12px]  flex flex-col">
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
      <ChartLegend2></ChartLegend2>
      
    </div>
  );
};

export default VolumeServiceChart;
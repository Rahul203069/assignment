import React from 'react';

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
    <div className="bg-white p-8 w-[371px] h-[349px]">
      {/* Title */}
      <h2 className="subtitle mb-8">
        Volume vs Service Level
      </h2>
      
      {/* Chart Container */}
      <div className="flex items-end justify-around space-x-4  mb-8">
        {data.map((item, index) => {
          const totalHeight = item.volume;
          const servicesHeight = item.services;
          const volumeHeight = totalHeight - servicesHeight;
          
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Stacked Bar */}
              <div className="w-[12px] flex flex-col">
                {/* Volume (Blue) portion */}
                <div 
                  className="bg-blue-500 w-full rounded-t-sm"
                  style={{ height: `${(volumeHeight / maxHeight) * 200}px` }}
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
      <div className="flex items-center justify-center space-x-8">
        {/* Volume Legend */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="text-sm">
            <span className="text-gray-400">Volume</span>
            <div className="font-semibold text-gray-900">1,135</div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-px h-8 bg-gray-200"></div>
        
        {/* Services Legend */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="text-sm">
            <span className="text-gray-400">Services</span>
            <div className="font-semibold text-gray-900">635</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeServiceChart;
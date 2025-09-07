import React from 'react';

const VolumeServiceChartSkeleton = () => {
  // Skeleton data for the stacked bars
  const skeletonData = [
    { volume: 85, services: 40 },
    { volume: 100, services: 45 },
    { volume: 75, services: 35 },
    { volume: 65, services: 40 },
    { volume: 50, services: 30 },
    { volume: 55, services: 35 }
  ];

  const maxHeight = 100;

  return (
    <div className="bg-white p-8 w-[371px] h-[349px] rounded-2xl shadow-box">
      {/* Title Skeleton */}
      <div className="mb-8">
        <div className="h-5 bg-gray-200 rounded-md w-40 animate-pulse"></div>
      </div>
      
      {/* Chart Container Skeleton */}
      <div className="flex items-end justify-around space-x-4 mb-8">
        {skeletonData.map((item, index) => {
          const totalHeight = item.volume;
          const servicesHeight = item.services;
          const volumeHeight = totalHeight - servicesHeight;
          
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Stacked Bar Skeleton */}
              <div className="w-[12px] flex flex-col">
                {/* Volume portion skeleton */}
                <div 
                  className="bg-gray-200 w-full rounded-t-sm animate-pulse"
                  style={{ 
                    height: `${(volumeHeight / maxHeight) * 200}px`,
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                />
                {/* Services portion skeleton */}
                <div 
                  className="bg-gray-200 w-full rounded-b-sm animate-pulse"
                  style={{ 
                    height: `${(servicesHeight / maxHeight) * 140}px`,
                    animationDelay: `${index * 0.1 + 0.05}s`,
                    animationDuration: '1.5s'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend Skeleton */}
      <div className="flex items-center justify-center space-x-8">
        {/* Volume Legend Skeleton */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="text-sm">
            <div className="h-3 bg-gray-200 rounded w-12 mb-1 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="h-4 bg-gray-200 rounded w-8 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Divider Skeleton */}
        <div className="w-px h-8 bg-gray-200 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Services Legend Skeleton */}
        <div className="flex items-center space-x-2 -mt-3">
          <div className="w-2 h-2 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="text-sm">
            <div className="h-3 bg-gray-200 rounded w-14 mb-1 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <div className="h-4 bg-gray-200 rounded w-6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default VolumeServiceChartSkeleton;
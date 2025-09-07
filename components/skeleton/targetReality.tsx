import React from 'react';

const TargetVsRealitySkeleton = () => {
  // Skeleton data matching your chart structure
  const skeletonData = [
    { height1: 70, height2: 50 },
    { height1: 45, height2: 60 },
    { height1: 35, height2: 80 },
    { height1: 58, height2: 45 },
    { height1: 70, height2: 88 },
    { height1: 65, height2: 85 },
    { height1: 75, height2: 90 }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-box   w-[371px] h-[351px]">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="h-5 bg-gray-200 rounded-md w-32 animate-pulse"></div>
      </div>
      
      {/* Chart Container */}
      <div className="mb-8">
        {/* Chart Area */}
        <div className="flex items-end justify-between h-40 px-2">
          {skeletonData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              {/* Bars Container */}
              <div className="flex items-end gap-1 h-32">
                {/* Reality Bar Skeleton */}
                <div
                  className="w-4 bg-gray-200 rounded-t-sm animate-pulse"
                  style={{ 
                    height: `${item.height1}%`,
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
                {/* Target Bar Skeleton */}
                <div
                  className="w-4 bg-gray-200 rounded-t-sm animate-pulse"
                  style={{ 
                    height: `${item.height2}%`,
                    animationDelay: `${index * 0.1 + 0.05}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              </div>
              {/* Month Label Skeleton */}
              <div 
                className="h-3 bg-gray-200 rounded w-6 mt-2 animate-pulse"
                style={{ animationDelay: `${index * 0.05}s` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend and Stats Skeleton */}
      <div className="space-y-1">
        {/* Reality Sales Skeleton */}
        <div className="flex items-center gap-3">
          {/* Icon Container Skeleton */}
          <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
          {/* Text Content Skeleton */}
          <div className="flex-1 space-y-1">
            <div className="h-3 bg-gray-200 rounded w-20 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="h-3 bg-gray-200 rounded w-12 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          {/* Value Skeleton */}
          <div className="h-5 bg-gray-200 rounded w-12 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Target Sales Skeleton */}
        <div className="flex items-center gap-3">
          {/* Icon Container Skeleton */}
          <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
          {/* Text Content Skeleton */}
          <div className="flex-1 space-y-1">
            <div className="h-3 bg-gray-200 rounded w-20 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          {/* Value Skeleton */}
          <div className="h-5 bg-gray-200 rounded w-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

// Demo component to show skeleton loading
export default TargetVsRealitySkeleton;
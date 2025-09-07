import React from 'react';

const MetricCardSkeleton = ({ delay = 0 }) => {
  return (
    <div className="relative p-6 rounded-2xl w-[180px] h-[184px] bg-gray-100">
      {/* Icon Container Skeleton */}
      <div 
        className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center mb-4 "
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
      </div>
      
      {/* Value Skeleton */}
      <div className="mb-1">
        <div 
          className="h-7 bg-gray-200 rounded w-12 "
          style={{ animationDelay: `${delay + 0.1}s` }}
        ></div>
      </div>
      
      {/* Label Skeleton */}
      <div className="mb-3">
        <div 
          className="h-4 bg-gray-200 rounded w-20 "
          style={{ animationDelay: `${delay + 0.2}s` }}
        ></div>
      </div>
      
      {/* Change Skeleton */}
      <div>
        <div 
          className="h-3 bg-gray-200 rounded w-24"
          style={{ animationDelay: `${delay + 0.3}s` }}
        ></div>
      </div>
    </div>
  );
};

const SalesDashboardSkeleton = () => {
  return (
    <div className="w-[870px] h-[348px] mx-auto p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div>
          {/* Title Skeleton */}
          <div className="h-7 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
          {/* Subtitle Skeleton */}
          <div 
            className="h-4 bg-gray-200 rounded w-24 animate-pulse"
            style={{ animationDelay: '0.1s' }}
          ></div>
        </div>
        
        {/* Export Button Skeleton */}
        <div 
          className="h-9 bg-gray-200 rounded w-20 animate-pulse"
          style={{ animationDelay: '0.2s' }}
        ></div>
      </div>

      {/* Metrics Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCardSkeleton delay={0.3} />
        <MetricCardSkeleton delay={0.4} />
        <MetricCardSkeleton delay={0.5} />
        <MetricCardSkeleton delay={0.6} />
      </div>
    </div>
  );
};


export default SalesDashboardSkeleton;

import React from 'react';

const TopProductsSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-box border  w-[645px] h-[351px]">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md w-32 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
      </div>
      
      {/* Table Header Skeleton */}
      <div className="flex items-center mb-4 space-x-4">
        <div className="w-12">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-4 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
        </div>
        <div className="flex-1">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-12 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
        </div>
        <div className="w-40">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-16 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
        </div>
        <div className="w-16 flex justify-end">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-10 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>

      {/* Product Rows Skeleton */}
      <div className="divide-y divide-gray-100">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="flex items-center py-4" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Index Skeleton */}
            <div className="w-12">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-6 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
            </div>
            
            {/* Product Name Skeleton */}
            <div className="flex-1">
              <div 
                className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"
                style={{ width: `${Math.random() * 40 + 60}%` }}
              ></div>
            </div>
            
            {/* Popularity Bar Skeleton */}
            <div className="w-[180px] pr-4">
              <div className="relative h-[4px] bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"
                  style={{ width: `${Math.random() * 30 + 40}%` }}
                ></div>
              </div>
            </div>
            
            {/* Sales Percentage Skeleton */}
            <div className="w-16 flex justify-end">
              <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg w-12 animate-pulse bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]"></div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};




export default TopProductsSkeleton;
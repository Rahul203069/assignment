const TotalRevenueChartSkeleton = () => {
  return (
    <div className="bg-white p-6 pb-7 rounded-2xl shadow-box   w-[645px] h-[351px]">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-6 bg-gray-200 rounded-md w-32 animate-pulse"></div>
      </div>
      
      {/* Chart Container Skeleton */}
      <div className="w-[589px] h-[176px] p-0 flex justify-center mb-6">
        <div className="w-full h-full relative">
          {/* Y-axis labels skeleton */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-3 bg-gray-200 rounded w-6 animate-pulse" 
                   style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          
          {/* Chart bars skeleton */}
          <div className="ml-10 h-full flex items-end justify-center gap-8">
            {[...Array(7)].map((_, dayIndex) => (
              <div key={dayIndex} className="flex flex-col items-center gap-2">
                {/* Bars container */}
                <div className="flex gap-1 items-end" style={{ height: '140px' }}>
                  {/* Online sales bar */}
                  <div 
                    className="bg-gray-200 rounded-t animate-pulse w-5"
                    style={{ 
                      height: `${Math.random() * 80 + 40}%`,
                      animationDelay: `${dayIndex * 0.15}s`,
                      animationDuration: '1.5s'
                    }}
                  ></div>
                  {/* Offline sales bar */}
                  <div 
                    className="bg-gray-200 rounded-t animate-pulse w-5"
                    style={{ 
                      height: `${Math.random() * 80 + 40}%`,
                      animationDelay: `${dayIndex * 0.15 + 0.1}s`,
                      animationDuration: '1.5s'
                    }}
                  ></div>
                </div>
                
                {/* X-axis label skeleton */}
                <div className="h-3 bg-gray-200 rounded w-12 animate-pulse mt-2"
                     style={{ animationDelay: `${dayIndex * 0.1}s` }}></div>
              </div>
            ))}
          </div>
          
          {/* Horizontal grid lines skeleton */}
          <div className="absolute inset-0 ml-10 flex flex-col justify-between py-2 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-px bg-gray-100 w-full animate-pulse"
                   style={{ animationDelay: `${i * 0.05}s` }}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend Skeleton */}
      <div className="flex items-center justify-center gap-4">
        {/* Online Sales Legend */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Offline Sales Legend */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      {/* Enhanced shimmer effect overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};



export default TotalRevenueChartSkeleton;
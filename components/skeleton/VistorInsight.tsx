import React from 'react';

const VisitorInsight = () => {
  return (
    <div
      style={{
        width: "593.02px",
        height: "348px",
        opacity: 1,
        borderRadius: "20px",
      
        position: "relative"
      }}
      className="bg-white rounded-2xl shadow-box  p-6"
    >
      {/* Title Skeleton */}
      <div className="mb-6">
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-32 animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Chart Area */}
      <div className="h-full w-full">
        <div className="h-[70%] relative">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-6 animate-[shimmer_1.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
          
          {/* Chart Grid Lines */}
          <div className="absolute inset-0 ml-8 mr-4">
            <div className="h-full flex flex-col justify-between py-4">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-px bg-gray-200 w-full opacity-60"
                ></div>
              ))}
            </div>
          </div>
          
          {/* Chart Lines Skeleton */}
          <div className="absolute inset-0 ml-8 mr-4 pt-4 pb-8">
            {/* Line 1 - Loyal Customers */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 200">
              <path
                d="M 0 120 Q 50 100 100 110 T 200 90 T 300 120 T 400 80 T 500 100"
                stroke="#e5e7eb"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-[drawLine_2s_ease-in-out_infinite]"
                style={{ 
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000',
                  animationDelay: '0.2s'
                }}
              />
              {/* Dots for Line 1 */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={i * 42}
                  cy={120 - (i % 3) * 20}
                  r="3"
                  fill="#e5e7eb"
                  className="animate-[fadeIn_0.5s_ease-in-out_infinite_alternate]"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                />
              ))}
            </svg>
            
            {/* Line 2 - New Customers */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 200">
              <path
                d="M 0 140 Q 50 130 100 135 T 200 150 T 300 140 T 400 120 T 500 130"
                stroke="#d1d5db"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-[drawLine_2s_ease-in-out_infinite]"
                style={{ 
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000',
                  animationDelay: '0.4s'
                }}
              />
              {/* Dots for Line 2 */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={i * 42}
                  cy={140 - (i % 4) * 15}
                  r="3"
                  fill="#d1d5db"
                  className="animate-[fadeIn_0.5s_ease-in-out_infinite_alternate]"
                  style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                />
              ))}
            </svg>
            
            {/* Line 3 - Unique Customers */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 200">
              <path
                d="M 0 100 Q 50 90 100 95 T 200 80 T 300 100 T 400 70 T 500 85"
                stroke="#9ca3af"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-[drawLine_2s_ease-in-out_infinite]"
                style={{ 
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000',
                  animationDelay: '0.6s'
                }}
              />
              {/* Dots for Line 3 */}
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={i * 42}
                  cy={100 - (i % 5) * 12}
                  r="3"
                  fill="#9ca3af"
                  className="animate-[fadeIn_0.5s_ease-in-out_infinite_alternate]"
                  style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                />
              ))}
            </svg>
          </div>
          
          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-8 right-4 flex justify-between">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-6 animate-[shimmer_1.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Legend Skeleton */}
        <div className="flex justify-center gap-6 mt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-sm animate-[shimmer_1.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
              <div 
                className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-20 animate-[shimmer_1.5s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
              ></div>
            </div>
          ))}
        </div>
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
        
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1000;
          }
        }
        
        @keyframes fadeIn {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .animate-drawLine {
          animation: drawLine 2s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default VisitorInsight;
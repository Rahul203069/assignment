import React from 'react';

const CustomerSatisfactionSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-box  w-[420px] h-[351px]">
      {/* Header Skeleton */}
      <div className="mb-6">
        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-40 animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Chart Container */}
      <div className="mb-6 relative border-b">
        <svg 
          viewBox="0 0 300 100" 
          className="w-full h-44 opacity-70"
          preserveAspectRatio="none"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="skeletonBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(203, 213, 225)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(241, 245, 249)" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="skeletonGreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(209, 213, 219)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(243, 244, 246)" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Animated gradient for shimmer effect on lines */}
            <linearGradient id="lineShimmer" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="rgb(203, 213, 225)" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="rgb(156, 163, 175)" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgb(203, 213, 225)" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </stop>
              <animateTransform 
                attributeName="gradientTransform" 
                type="translate" 
                values="-100 0;300 0;-100 0" 
                dur="3s" 
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          
          {/* Skeleton curve paths */}
          <path 
            d="M 0 75 C 16.7 75, 33.3 45, 50 45 C 66.7 45, 83.3 50, 100 50 C 116.7 50, 133.3 60, 150 60 C 166.7 60, 183.3 55, 200 55 C 216.7 55, 233.3 65, 250 65 C 266.7 65, 283.3 70, 300 70 L 300 100 L 0 100 Z"
            fill="url(#skeletonBlueGradient)"
            className="animate-[fadeInOut_2s_ease-in-out_infinite]"
          />
          
          <path 
            d="M 0 25 C 16.7 25, 33.3 35, 50 35 C 66.7 35, 83.3 20, 100 20 C 116.7 20, 133.3 40, 150 40 C 166.7 40, 183.3 45, 200 45 C 216.7 45, 233.3 50, 250 50 C 266.7 50, 283.3 15, 300 15 L 300 100 L 0 100 Z"
            fill="url(#skeletonGreenGradient)"
            className="animate-[fadeInOut_2s_ease-in-out_infinite]"
            style={{ animationDelay: '0.3s' }}
          />
          
          {/* Skeleton line strokes with shimmer */}
          <path 
            d="M 0 75 C 16.7 75, 33.3 45, 50 45 C 66.7 45, 83.3 50, 100 50 C 116.7 50, 133.3 60, 150 60 C 166.7 60, 183.3 55, 200 55 C 216.7 55, 233.3 65, 250 65 C 266.7 65, 283.3 70, 300 70"
            fill="none" 
            stroke="url(#lineShimmer)" 
            strokeWidth="2"
            className="animate-[drawLine_3s_ease-in-out_infinite]"
          />
          
          <path 
            d="M 0 25 C 16.7 25, 33.3 35, 50 35 C 66.7 35, 83.3 20, 100 20 C 116.7 20, 133.3 40, 150 40 C 166.7 40, 183.3 45, 200 45 C 216.7 45, 233.3 50, 250 50 C 266.7 50, 283.3 15, 300 15"
            fill="none" 
            stroke="url(#lineShimmer)" 
            strokeWidth="2"
            className="animate-[drawLine_3s_ease-in-out_infinite]"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Skeleton data points */}
          {[
            { x: 0, y: 75 }, { x: 50, y: 45 }, { x: 100, y: 50 }, 
            { x: 150, y: 60 }, { x: 200, y: 55 }, { x: 250, y: 65 }, { x: 300, y: 70 }
          ].map((point, index) => (
            <circle
              key={`skeleton-last-${index}`}
              cx={point.x}
              cy={point.y}
              r="2.5"
              fill="rgb(156, 163, 175)"
              className="animate-[pulse_1.5s_ease-in-out_infinite] opacity-60"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
          
          {[
            { x: 0, y: 25 }, { x: 50, y: 35 }, { x: 100, y: 20 }, 
            { x: 150, y: 40 }, { x: 200, y: 45 }, { x: 250, y: 50 }, { x: 300, y: 15 }
          ].map((point, index) => (
            <circle
              key={`skeleton-this-${index}`}
              cx={point.x}
              cy={point.y}
              r="2.5"
              fill="rgb(156, 163, 175)"
              className="animate-[pulse_1.5s_ease-in-out_infinite] opacity-60"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Legend Skeleton */}
      <div className="flex items-center justify-center">
        <div className="flex items-start justify-center gap-4 bg-white">
          {/* First Legend Item */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-0">
              <div className="flex items-center">
                <div className="w-4 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-full -mx-0.5 relative z-10 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-20 ml-1 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-12 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Divider */}
          <div className="w-px h-5 top-0 m-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 bg-[length:100%_200%] animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}></div>
          
          {/* Second Legend Item */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-4 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full" style={{ animationDelay: '0.7s' }}></div>
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-full -mx-0.5 relative z-10 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }}></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-full" style={{ animationDelay: '0.9s' }}></div>
              </div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-20 ml-1 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '1.0s' }}></div>
            </div>
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded w-12 animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ animationDelay: '1.1s' }}></div>
          </div>
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
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        @keyframes drawLine {
          0% {
            stroke-dasharray: 0 1000;
          }
          50% {
            stroke-dasharray: 500 500;
          }
          100% {
            stroke-dasharray: 1000 0;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .animate-drawLine {
          animation: drawLine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CustomerSatisfactionSkeleton;
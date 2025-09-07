import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Same world TopoJSON data as your component
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const SalesMapSkeleton = () => {
  return (
    <div className="bg-white shadow-box rounded-2xl p-4 w-[421px] h-[351px]">
      {/* Title Skeleton */}
      <div className="mb-4">
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-md w-48 animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Map Container */}
      <div className="w-full h-[280px] relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 70, center: [0, 0] }}
          width={380}
          height={280}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e5e7eb"
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  className="animate-[fadeInOut_2s_ease-in-out_infinite]"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#d1d5db" },
                    pressed: { outline: "none" },
                   
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        
        {/* Loading overlay with shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slideAcross_3s_ease-in-out_infinite] pointer-events-none"></div>
        
        {/* Subtle pulse indicators for potential highlighted regions */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Generic region indicators - positioned roughly where major countries might be */}
          {[
            { top: '35%', left: '25%' }, // North America region
            { top: '65%', left: '30%' }, // South America region  
            { top: '45%', left: '60%' }, // Africa/Europe region
            { top: '40%', left: '80%' }, // Asia region
            { top: '75%', left: '85%' }  // Oceania region
          ].map((position, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-gray-400 rounded-full animate-[pulse_2s_ease-in-out_infinite] opacity-40"
              style={{
                top: position.top,
                left: position.left,
                animationDelay: `${index * 0.4}s`
              }}
            />
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
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }
        
        @keyframes slideAcross {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-slideAcross {
          animation: slideAcross 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SalesMapSkeleton;
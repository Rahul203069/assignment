//@ts-nocheck
import React from 'react';
import ChartLegend from './ChartLegend';

const CustomerSatisfactionChart = () => {
  // Data points for the curves (normalized to fit SVG viewBox)
  const lastMonthData = [
    { x: 0, y: 75 },
    { x: 50, y: 45 },
    { x: 100, y: 50 },
    { x: 150, y: 60 },
    { x: 200, y: 55 },
    { x: 250, y: 65 },
    { x: 300, y: 70 }
  ];

  const thisMonthData = [
    { x: 0, y: 25 },
    { x: 50, y: 35 },
    { x: 100, y: 20 },
    { x: 150, y: 40 },
    { x: 200, y: 45 },
    { x: 250, y: 50 },
    { x: 300, y: 15 }
  ];

  // Generate smooth curve path using cubic Bezier curves
  const generateSmoothPath = (points) => {
    if (points.length < 2) return '';
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const next = points[i + 1] || curr;
      
      // Calculate control points for smooth curve
      const cp1x = prev.x + (curr.x - prev.x) * 0.3;
      const cp1y = prev.y;
      const cp2x = curr.x - (next.x - prev.x) * 0.3;
      const cp2y = curr.y;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  const lastMonthPath = generateSmoothPath(lastMonthData);
  const thisMonthPath = generateSmoothPath(thisMonthData);

  // Create area paths (fill to bottom)
  const lastMonthAreaPath = lastMonthPath + ` L 300 100 L 0 100 Z`;
  const thisMonthAreaPath = thisMonthPath + ` L 300 100 L 0 100 Z`;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-box  w-[420px] h-[351px]">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Customer Satisfaction</h2>
      
      {/* Chart Container */}
      <div className="mb-6 relative border-b ">
        <svg 
          viewBox="0 0 300 100" 
          className="w-full h-44 opacity-70"
          preserveAspectRatio="none"
        >
          {/* Gradient Definitions */}
<defs>
  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">

    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.35" />
    <stop offset="100%" stopColor="rgb(153, 210, 255)" stopOpacity="0.05" />
  </linearGradient>

  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
    
    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.35" />
    
    <stop offset="100%" stopColor="rgb(178, 255, 220)" stopOpacity="0.05" />
  </linearGradient>
</defs>

          
          {/* Area fills */}
          <path 
            d={lastMonthAreaPath} 
            fill="url(#blueGradient)"
          />
          <path 
            d={thisMonthAreaPath} 
            fill="url(#greenGradient)"
          />
          
          {/* Line strokes */}
          <path 
            d={lastMonthPath} 
            fill="none" 
            stroke="rgb(59, 130, 246)" 
            strokeWidth="2"
          />
          <path 
            d={thisMonthPath} 
            fill="none" 
            stroke="rgb(16, 185, 129)" 
            strokeWidth="2"
          />
          
          {/* Data points */}
          {lastMonthData.map((point, index) => (
            <circle
              key={`last-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="rgb(59, 130, 246)"
              className="drop-shadow-sm"
            />
          ))}
          {thisMonthData.map((point, index) => (
            <circle
              key={`this-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="rgb(16, 185, 129)"
              className="drop-shadow-sm"
            />
          ))}
        </svg>
      </div>

      {/* Legend and Stats */}
      <div className="flex items-center justify-center">
       <ChartLegend></ChartLegend>
       </div>
    </div>
  );
};

export default CustomerSatisfactionChart;
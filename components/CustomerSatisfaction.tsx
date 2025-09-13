import React from 'react';
import ChartLegend from './ChartLegend';
import { useDashboard } from '@/Context/DashboardContext';

const CustomerSatisfactionChart = () => {
  const { data } = useDashboard();

  const lastMonthData = data?.customerSatisfaction.lastMonthData || [];
  const thisMonthData = data?.customerSatisfaction.thisMonthData || [];

  // Generate smooth curve path using cubic Bezier curves
  const generateSmoothPath = (points: any) => {
    if (points.length < 2) return '';

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const next = points[i + 1] || curr;

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

  const lastMonthAreaPath = lastMonthPath + ` L 300 100 L 0 100 Z`;
  const thisMonthAreaPath = thisMonthPath + ` L 300 100 L 0 100 Z`;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-box w-full max-w-full min-h-[300px] flex flex-col items-center">
      
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 text-center">
        Customer Satisfaction
      </h2>

      {/* Responsive SVG Container */}
      <div className="w-full flex justify-center mb-6 border-b">
        <svg
          viewBox="0 0 300 100"
          className="w-full h-[200px] sm:h-[250px]"
          preserveAspectRatio="none"
        >
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
          <path d={lastMonthAreaPath} fill="url(#blueGradient)" />
          <path d={thisMonthAreaPath} fill="url(#greenGradient)" />

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

      {/* Responsive Legend */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
        <ChartLegend />
      </div>
    </div>
  );
};

export default CustomerSatisfactionChart;

import React from 'react';

const ChartLegend = () => {
  return (
    <div className="flex items-start justify-center gap-4  bg-white ">
      {/* Last Month */}
      <div className="flex flex-col items-center gap-3">
        {/* Legend with dot and line */}
        <div className="flex items-center gap-0">
          <div className="flex items-center">
            {/* Line before dot */}
            <div className="w-4 h-0.5 bg-blue-500"></div>
            {/* Dot */}
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full -mx-0.5 relative z-10"></div>
            {/* Line after dot */}
            <div className="w-4 h-0.5 bg-blue-500"></div>
          </div>
          {/* Label */}
          <span className="text-gray-400 text-[16px] font-normal ml-1">Last Month</span>
        </div>
        
        {/* Value */}
        <div 
          style={{
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '0px',
    letterSpacing: '0px',
  }}
        className="text-gray-900 text-xl font-semibold">$3,004</div>
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-5 top-0 m-0 bg-gray-200"></div>

      {/* This Month */}
      <div className="flex flex-col items-center gap-3">
        {/* Legend with dot and line */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {/* Line before dot */}
            <div className="w-4 h-0.5 bg-emerald-500"></div>
            {/* Dot */}
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full -mx-0.5 relative z-10"></div>
            {/* Line after dot */}
            <div className="w-4 h-0.5 bg-emerald-500"></div>
          </div>
          {/* Label */}
<span

  className="text-gray-400 text-[16px] font-normal ml-1"
>
  Last Month
</span>
        </div>
        
        {/* Value */}
        <div  
          style={{
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '0px',
    letterSpacing: '0px',
  }}className="text-gray-900 text-xl font-semibold">$4,504</div>
      </div>
    </div>
  );
};

export default ChartLegend;
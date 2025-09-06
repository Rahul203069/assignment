import React from "react";

const PieChart = ({ percent = 25, size = 100 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `conic-gradient(#6C63FF ${percent * 3.6}deg, #fff 0deg)`,
      }}
    ></div>
  );
};

export default PieChart;
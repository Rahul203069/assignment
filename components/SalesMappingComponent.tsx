"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useDashboard } from "@/Context/DashboardContext";

// World TopoJSON data
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const SalesMap = () => {
  const { data } = useDashboard();
  const highlightedCountries = data?.highlightedCountries || {};

  return (
    <div className="bg-white shadow-box rounded-2xl p-4 w-full max-w-[421px] mx-auto min-h-[351px]">
      <h2 className="text-xl font-semibold subtitle mb-4 text-center sm:text-left">
        Sales Mapping by Country
      </h2>

      <div className="w-full h-[280px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 70, center: [0, 0] }}
          width={380}
          height={280}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const code = geo.id;
                const color = highlightedCountries[code] || "#E5E7EB";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={color}
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none", cursor: "pointer" },
                      hover: {
                        outline: "none",
                        fill: highlightedCountries[code] ? color : "#D1D5DB",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Optional Legend (Commented out) */}
      {/* <div className="mt-4 flex flex-wrap gap-2 text-xs justify-center sm:justify-start">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span>USA</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span>Brazil</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>China</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Indonesia</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Nigeria</span>
        </div>
      </div> */}
    </div>
  );
};

export default SalesMap;

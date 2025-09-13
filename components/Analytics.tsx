import React, { useEffect } from 'react';
import axios from 'axios';
import { useDashboard } from '@/Context/DashboardContext';
import { convertSecondToFirst } from '@/lib/utils';
import { DashboardData } from '@/types/AnalyticsTypes';

import SalesDashboard from './salesDashboard';
import VisitorInsights from './VisitorInsight';
import TargetVsRealityChart from './TargetReality';
import CustomerSatisfaction from './CustomerSatisfaction';
import VolumeServiceChart from './VolumeServiceChart';
import TotalRevenueChart from './TotalRevenue';
import TopProductsComponent from './TopProductsComponents';
import SalesMap from './SalesMappingComponent';
import Lanalytics from './skeleton/LoadingAnalytics';







const dashboardData={
  "salesDashboardMetrics": [
    {
      "id": 1,
      "icon": "ShoppingBag",
      "value": "$1k",
      "label": "Total Sales",
      "change": "+8% from yesterday",
      "bgColor": "#FFE2E5",
      "iconColor": "#FA5A7D"
    },
    {
      "id": 2,
      "icon": "FileText",
      "value": "300",
      "label": "Total Order",
      "change": "+5% from yesterday",
      "bgColor": "#FFF4DE",
      "iconColor": "#FF947A"
    },
    {
      "id": 3,
      "icon": "CheckCircle",
      "value": "5",
      "label": "Product Sold",
      "change": "+1.2% from yesterday",
      "bgColor": "#DCFCE7",
      "iconColor": "#3CD856"
    },
    {
      "id": 4,
      "icon": "Users",
      "value": "8",
      "label": "New Customers",
      "change": "+0.5% from yesterday",
      "bgColor": "#F3E8FF",
      "iconColor": "#BF83FF"
    }
  ],
  "visitorInsights": [
    { "month": "Jan", "loyalCustomers": 350, "newCustomers": 300, "uniqueCustomers": 320 },
    { "month": "Feb", "loyalCustomers": 380, "newCustomers": 280, "uniqueCustomers": 340 },
    { "month": "Mar", "loyalCustomers": 320, "newCustomers": 250, "uniqueCustomers": 380 },
    { "month": "Apr", "loyalCustomers": 300, "newCustomers": 220, "uniqueCustomers": 400 },
    { "month": "May", "loyalCustomers": 280, "newCustomers": 200, "uniqueCustomers": 380 },
    { "month": "Jun", "loyalCustomers": 250, "newCustomers": 180, "uniqueCustomers": 350 },
    { "month": "Jul", "loyalCustomers": 300, "newCustomers": 260, "uniqueCustomers": 380 },
    { "month": "Aug", "loyalCustomers": 380, "newCustomers": 350, "uniqueCustomers": 420 },
    { "month": "Sept", "loyalCustomers": 450, "newCustomers": 400, "uniqueCustomers": 440 },
    { "month": "Oct", "loyalCustomers": 420, "newCustomers": 380, "uniqueCustomers": 400 },
    { "month": "Nov", "loyalCustomers": 380, "newCustomers": 340, "uniqueCustomers": 360 },
    { "month": "Dec", "loyalCustomers": 320, "newCustomers": 280, "uniqueCustomers": 320 }
  ],
  "totalRevenueChart": [
    { "name": "Monday", "onlineSales": 14, "offlineSales": 12 },
    { "name": "Tuesday", "onlineSales": 17, "offlineSales": 11 },
    { "name": "Wednesday", "onlineSales": 5, "offlineSales": 22 },
    { "name": "Thursday", "onlineSales": 16, "offlineSales": 6 },
    { "name": "Friday", "onlineSales": 12, "offlineSales": 11 },
    { "name": "Saturday", "onlineSales": 17, "offlineSales": 13 },
    { "name": "Sunday", "onlineSales": 21, "offlineSales": 11 }
  ],
  "customerSatisfaction": {
    "lastMonthData": [
      { "x": 0, "y": 75 },
      { "x": 50, "y": 45 },
      { "x": 100, "y": 50 },
      { "x": 150, "y": 60 },
      { "x": 200, "y": 55 },
      { "x": 250, "y": 65 },
      { "x": 300, "y": 70 }
    ],
    "thisMonthData": [
      { "x": 0, "y": 25 },
      { "x": 50, "y": 35 },
      { "x": 100, "y": 20 },
      { "x": 150, "y": 40 },
      { "x": 200, "y": 45 },
      { "x": 250, "y": 50 },
      { "x": 300, "y": 15 }
    ]
  },
  "targetVsReality": [
    { "month": "Jan", "reality": 85, "target": 60 },
    { "month": "Feb", "reality": 55, "target": 75 },
    { "month": "Mar", "reality": 45, "target": 100 },
    { "month": "Apr", "reality": 70, "target": 55 },
    { "month": "May", "reality": 85, "target": 110 },
    { "month": "June", "reality": 80, "target": 105 },
    { "month": "July", "reality": 90, "target": 108 }
  ],
  "topProducts": [
    {
      "id": "01",
      "name": "Home Decor Range",
      "popularity": 45,
      "sales": 45,
      "color": "#3B82F6",
      "lightColor": "#DBEAFE"
    },
    {
      "id": "02",
      "name": "Disney Princess Pink Bag 18'",
      "popularity": 29,
      "sales": 29,
      "color": "#10B981",
      "lightColor": "#D1FAE5"
    },
    {
      "id": "03",
      "name": "Bathroom Essentials",
      "popularity": 18,
      "sales": 18,
      "color": "#8B5CF6",
      "lightColor": "#EDE9FE"
    },
    {
      "id": "04",
      "name": "Apple Smartwatches",
      "popularity": 25,
      "sales": 25,
      "color": "#F59E0B",
      "lightColor": "#FEF3C7"
    }
  ],
  "highlightedCountries": {
    "840": "#F59E0B",
    "076": "#EF4444",
    "156": "#8B5CF6",
    "360": "#10B981",
    "566": "#3B82F6"
  },
  "volumeServiceChartSkeleton": [
    { "volume": 85, "services": 40 },
    { "volume": 100, "services": 45 },
    { "volume": 75, "services": 35 },
    { "volume": 65, "services": 40 },
    { "volume": 50, "services": 30 },
    { "volume": 55, "services": 35 }
  ]
}











const Analytics = () => {
  const { data, setData } = useDashboard();

  useEffect(() => {


    // axios
    //   .get<DashboardData | null>('https://nestbackend-7tfp.onrender.com/api/dashboard/data')
    //   .then((res) => {
    //     if (res.data !== null) {
         
    //     }
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     setData(null);
    //     console.error('Error fetching analytics:', err);
    //   });

      setTimeout(() => {
        setData(convertSecondToFirst(dashboardData));
      }, 4000);
    console.log(data);
  }, []);

  if (data === null || data === undefined) {
    return <Lanalytics />;
  } else {
    return (
      <div className="w-full min-h-screen p-4 sm:p-6 bg-[#FAFBFC]">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-white rounded-2xl p-4 flex-shrink-0 w-full lg:w-[877px] h-[348px]">
            <SalesDashboard />
          </div>

          <div className="flex-1">
            <VisitorInsights />
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <TotalRevenueChart />
          <CustomerSatisfaction />
          <TargetVsRealityChart />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <TopProductsComponent />
          <SalesMap />
          <VolumeServiceChart />
        </div>
      </div>
    );
  }
};

export default Analytics;

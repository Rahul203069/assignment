//@ts-nocheck

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}










export function convertSecondToFirst(secondObj) {
  return {
    salesDashboardMetrics: secondObj.salesDashboardMetrics,

    visitorInsights: secondObj.visitorInsights.map(item => ({
      month: item.month,
      loyalCustomers: item.loyalCustomers,
      newCustomers: item.newCustomers,
      uniqueCustomers: item.uniqueCustomers
    })),

    totalRevenueChart: secondObj.totalRevenueChart.map(item => ({
      name: item.name,
      onlineSales: item.onlineSales,
      offlineSales: item.offlineSales
    })),

    customerSatisfaction: {
      lastMonthData: secondObj.customerSatisfaction
        .filter(item => item.dataset === 'lastMonth')
        .map(item => ({ x: item.x, y: item.y })),
      
      thisMonthData: secondObj.customerSatisfaction
        .filter(item => item.dataset === 'thisMonth')
        .map(item => ({ x: item.x, y: item.y }))
    },

    targetVsReality: secondObj.targetVsReality.map(item => ({
      month: item.month,
      reality: item.reality,
      target: item.target
    })),

    topProducts: secondObj.topProducts.map(item => ({
      id: item.id,
      name: item.name,
      popularity: item.popularity,
      sales: item.sales,
      color: item.color,
      lightColor: item.lightColor
    })),

    highlightedCountries: secondObj.highlightedCountries.reduce((acc, item) => {
      acc[item.countryCode] = item.color;
      return acc;
    }, {}),

    volumeServiceChartSkeleton: secondObj.volumeServiceChart.map(item => ({
      volume: item.volume,
      services: item.services
    }))
  };
}


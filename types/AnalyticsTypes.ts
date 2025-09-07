export interface SalesDashboardMetric {
  id: number;
  icon: string; // you are storing icon name as string in JSON
  value: string;
  label: string;
  change: string;
  bgColor: string;
  iconColor: string;
}

export interface VisitorInsight {
  month: string;
  loyalCustomers: number;
  newCustomers: number;
  uniqueCustomers: number;
}

export interface RevenueData {
  name: string;
  onlineSales: number;
  offlineSales: number;
}

export interface ChartPoint {
  x: number;
  y: number;
}

export interface CustomerSatisfaction {
  lastMonthData: ChartPoint[];
  thisMonthData: ChartPoint[];
}

export interface TargetReality {
  month: string;
  reality: number;
  target: number;
}

export interface TopProduct {
  id: string;
  name: string;
  popularity: number;
  sales: number;
  color: string;
  lightColor: string;
}

export interface HighlightedCountries {
  [countryCode: string]: string; // e.g., "840": "#F59E0B"
}

export interface VolumeService {
  volume: number;
  services: number;
}

export interface DashboardData {
  salesDashboardMetrics: SalesDashboardMetric[];
  visitorInsights: VisitorInsight[];
  totalRevenueChart: RevenueData[];
  customerSatisfaction: CustomerSatisfaction;
  targetVsReality: TargetReality[];
  topProducts: TopProduct[];
  highlightedCountries: HighlightedCountries;
  volumeServiceChartSkeleton: VolumeService[];
}
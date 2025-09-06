import { TotalRevenue } from './TotalRevenue';
import { CustomerSatisfaction } from './CustomerSatisfaction';
import { TargetVsReality } from './TargetReality';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <TotalRevenue />
        <CustomerSatisfaction />
        <TargetVsReality />
      </div>
    </div>
  );
};
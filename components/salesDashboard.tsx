import { Download, ShoppingBag, FileText, CheckCircle, Users, LucideIcon } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { useDashboard } from "@/Context/DashboardContext";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  Download,
  ShoppingBag,
  FileText,
  CheckCircle,
  Users,
};

const SalesDashboard = () => {
  const { data } = useDashboard();
  const metrics = data?.salesDashboardMetrics;

  return (
    <div className="w-[870px] h-[348px] mx-auto p-6 bg-background shadow-box rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">Today's Sales</h1>
          <p className="text-metric-text">Sales Summary</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric) => {
          const Icon = iconMap[metric.icon]; // convert string → component

      
          return (
            <MetricCard
              key={metric.id}
              icon={Icon} // pass the component
              value={metric.value}
              label={metric.label}
              change={metric.change}
              bgColor={metric.bgColor}
              iconColor={metric.iconColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SalesDashboard;
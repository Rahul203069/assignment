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
    <div className="w-full max-w-[870px] mx-auto p-3 sm:p-4 md:p-6 bg-background h-full shadow-box rounded-2xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row bg-white items-start sm:items-center justify-between mb-6 gap-3 min-w-0">
        <div className="truncate min-w-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground truncate">
            Today's Sales
          </h1>
          <p className="text-sm sm:text-base text-metric-text truncate">Sales Summary</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 flex-shrink-0">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
        <div
          className="
            grid gap-4 
            grid-cols-1 
            xs:grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5
          "
        >
          {metrics?.map((metric) => {
            const Icon = iconMap[metric.icon];

            return (
              <MetricCard
                key={metric.id}
                icon={Icon}
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
    </div>
  );
};

export default SalesDashboard;

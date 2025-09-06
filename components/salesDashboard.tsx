import { Button } from "@/components/ui/button";
import { Download, ShoppingBag, FileText, CheckCircle, Users } from "lucide-react";
import { MetricCard } from "./MetricCard";

export const SalesDashboard = () => {
  const metrics = [
    {
      id: 1,
      icon: ShoppingBag,
      value: "$1k",
      label: "Total Sales",
      change: "+8% from yesterday",
      bgColor: "#FFE2E5",
      iconColor: "#FA5A7D",
    },
    {
      id: 2,
      icon: FileText,
      value: "300",
      label: "Total Order",
      change: "+5% from yesterday",
      bgColor: "#FFF4DE",
      iconColor: "#FF947A",
    },
    {
      id: 3,
      icon: CheckCircle,
      value: "5",
      label: "Product Sold",
      change: "+1.2% from yesterday",
      bgColor: "#DCFCE7",
      iconColor: "#3CD856",
    },
    {
      id: 4,
      icon: Users,
      value: "8",
      label: "New Customers",
      change: "+0.5% from yesterday",
      bgColor: "#F3E8FF",
      iconColor: "#BF83FF",
    },
  ];

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
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            icon={metric.icon}
            value={metric.value}
            label={metric.label}
            change={metric.change}
            bgColor={metric.bgColor}
            iconColor={metric.iconColor}
          />
        ))}
      </div>
    </div>
  );
};
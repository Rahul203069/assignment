import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  change: string;
  bgColor: string;
  iconColor: string;
}

export const MetricCard = ({
  icon: Icon,
  value,
  label,
  change,
  bgColor,
  iconColor,
}: MetricCardProps) => {
  return (
    <div  style={{
        backgroundColor:bgColor
    }} className={cn(
      "relative cursor-pointer p-6 rounded-2xl w-[180px] h-[184px] transition-all duration-200 hover:scale-105 hover:shadow-lg",
      bgColor
    )}>
      {/* Icon */}
      <div style={{backgroundColor:iconColor}} className={cn(
        "w-[40px] h-[40px] rounded-full flex items-center justify-center mb-4",
        iconColor
      )}>
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* Value */}
      <div className="mb-1">
        <span className="text-2xl font-semibold text-foreground">{value}</span>
      </div>

      {/* Label */}
      <div className="mb-3">
        <span 
        
style={{
  fontWeight: 500,
  color:'#425166',
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0px",
}}
        className="text-sm font-bse text-foreground">{label}</span>
      </div>

      {/* Change */}
      <div>
        <span
        
        style={

            {


fontWeight:"500",
fontSize: "12px",
color:'#4079ED',
lineHeight: "16px",
letterSpacing:" 0px",

            }
        }
        
        className="text-xs text-success-text font-medium">{change}</span>
      </div>
    </div>
  );
};
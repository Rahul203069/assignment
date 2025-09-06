"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


import {
  LayoutDashboard,
  Trophy,
  ShoppingCart,
  Package,
  BarChart3,
  MessageCircle,
  Settings,
  LogOut,
  Crown,
} from "lucide-react";

import DabangPro from "./Dbangpro";

const navigationItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
    { title: "Order", url: "/order", icon: ShoppingCart },
    { title: "Products", url: "/products", icon: Package },
    { title: "Sales Report", url: "/sales-report", icon: BarChart3 },
    { title: "Messages", url: "/messages", icon: MessageCircle },
    { title: "Settings", url: "/settings", icon: Settings },
    { title: "Sign Out", url: "/sign-out", icon: LogOut },
];

export function DabangSidebar() {
 
  const currentPath = usePathname()
const  router = useRouter()
  return (
    <div className="w-[345px] px-10 pt-8 h-screen bg-white border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6  ">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-custom rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">$</span>
          </div>
          <span className="font-semibold   text-foreground text-3xl">Dabang</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.url;
            return (
              <div  className="w-full flex justify-center"  key={item.title}>
                <div
               
                  
                  onClick={() => { router.push(item.url)}}
                  className={` w-full py-[16px] px-[24px]  hover:cursor-pointer  text-[16px] flex justify-start  items-center gap-[24px]   rounded-xl  font-medium transition-all duration-200 ${
                    isActive
                      ? " text-primary-foreground shadow-lg bg bg-custom"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Pro Upgrade Card */}
      <div className="p-4">
       <DabangPro></DabangPro>
      </div>
    </div>
  );
}
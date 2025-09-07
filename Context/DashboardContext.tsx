"use client"; // important in App Router (Next.js 13+)

import { createContext, useContext, useState, ReactNode } from "react";
import type { DashboardData } from "@/types/AnalyticsTypes";

// Define shape of context
interface DashboardContextType {
  data: DashboardData | null | undefined;
  setData: React.Dispatch<React.SetStateAction<DashboardData | null | undefined>>;
}
// Create context
const DashboardContext = createContext<DashboardContextType | null>(null);

// Provider component
export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DashboardData | null |undefined>(null);

  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook to use the context
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
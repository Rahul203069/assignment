import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', loyalCustomers: 350, newCustomers: 300, uniqueCustomers: 320 },
  { month: 'Feb', loyalCustomers: 380, newCustomers: 280, uniqueCustomers: 340 },
  { month: 'Mar', loyalCustomers: 320, newCustomers: 250, uniqueCustomers: 380 },
  { month: 'Apr', loyalCustomers: 300, newCustomers: 220, uniqueCustomers: 400 },
  { month: 'May', loyalCustomers: 280, newCustomers: 200, uniqueCustomers: 380 },
  { month: 'Jun', loyalCustomers: 250, newCustomers: 180, uniqueCustomers: 350 },
  { month: 'Jul', loyalCustomers: 300, newCustomers: 260, uniqueCustomers: 380 },
  { month: 'Aug', loyalCustomers: 380, newCustomers: 350, uniqueCustomers: 420 },
  { month: 'Sept', loyalCustomers: 450, newCustomers: 400, uniqueCustomers: 440 },
  { month: 'Oct', loyalCustomers: 420, newCustomers: 380, uniqueCustomers: 400 },
  { month: 'Nov', loyalCustomers: 380, newCustomers: 340, uniqueCustomers: 360 },
  { month: 'Dec', loyalCustomers: 320, newCustomers: 280, uniqueCustomers: 320 },
];

const CustomLegend = () => {
  return (
    <div style={{fontWeight:'500',font:'Epilogue',color:'#464E5F'}} className="flex  justify-center gap-6 mt-4 text-[12px] font-medium ">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-loyal rounded-sm"></div>
        <span className="">Loyal Customers</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-new rounded-sm"></div>
        <span className="">New Customers</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-unique rounded-sm"></div>
        <span className="  ">Unique Customers</span>
      </div>
    </div>
  );
};

export const VisitorInsights = () => {
  return (
<div
  style={{
    width: "593.02px",
    height: "348px",

    opacity: 1,
    borderRadius: "20px",
    borderWidth: "1px",
    position: "relative"
  }}
  className="bg-white  rounded-lg shadow-box  p-6 "
>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Visitor Insights</h2>
      
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="70%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="hsl(var(--chart-grid))" 
              strokeWidth={1}
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--chart-text))', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--chart-text))', fontSize: 12 }}
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            <Line 
              type="monotone" 
              dataKey="loyalCustomers" 
              stroke="hsl(var(--chart-loyal))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-loyal))", r: 3 }}
              activeDot={{ r: 4, fill: "hsl(var(--chart-loyal))" }}
            />
            <Line 
              type="monotone" 
              dataKey="newCustomers" 
              stroke="hsl(var(--chart-new))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-new))", r: 3 }}
              activeDot={{ r: 4, fill: "hsl(var(--chart-new))" }}
            />
            <Line 
              type="monotone" 
              dataKey="uniqueCustomers" 
              stroke="hsl(var(--chart-unique))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-unique))", r: 3 }}
              activeDot={{ r: 4, fill: "hsl(var(--chart-unique))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      <CustomLegend />
      </div>
      
    </div>
  );
};
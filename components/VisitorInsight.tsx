import { useDashboard } from "@/Context/DashboardContext";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';



const CustomLegend = () => {
  return (
    <div
      style={{ fontWeight: '500', font: 'Epilogue', color: '#464E5F' }}
      className="flex justify-center gap-6 mt-4 text-[12px] font-medium "
    >
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-loyal rounded-sm"></div>
        <span>Loyal Customers</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-new rounded-sm"></div>
        <span>New Customers</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-chart-unique rounded-sm"></div>
        <span>Unique Customers</span>
      </div>
    </div>
  );
};


const VisitorInsights = () => {
  const { data } = useDashboard();
  const insights = data?.visitorInsights || [];

  return (
    <div
      style={{
        width: '590px',
        height: '348px',
        opacity: 1,
        borderRadius: '20px',
        position: 'relative',
      }}
      className="bg-white rounded-lg shadow-box p-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Visitor Insights
      </h2>

      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="70%">
          <LineChart
            data={insights}
            margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
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
            <Tooltip cursor={{ stroke: 'hsl(var(--chart-grid))', strokeWidth: 1 }} />
            
            {/* Lines */}
            <Line
              type="monotone"
              dataKey="loyalCustomers"
              stroke="hsl(var(--chart-loyal))"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: 'hsl(var(--chart-loyal))' }}
            />
            <Line
              type="monotone"
              dataKey="newCustomers"
              stroke="hsl(var(--chart-new))"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: 'hsl(var(--chart-new))' }}
            />
            <Line
              type="monotone"
              dataKey="uniqueCustomers"
              stroke="hsl(var(--chart-unique))"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: 'hsl(var(--chart-unique))' }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <CustomLegend />
      </div>
    </div>
  );
};

export default VisitorInsights;

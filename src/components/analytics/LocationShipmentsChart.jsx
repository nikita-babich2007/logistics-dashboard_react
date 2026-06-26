import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const LocationShipmentsChart = ({ data }) => {
  const chartData = [
    { month: 'Jan', val: Math.round(data.shipments * 0.1) },
    { month: 'Feb', val: Math.round(data.shipments * 0.15) },
    { month: 'Mar', val: Math.round(data.shipments * 0.12) },
    { month: 'Apr', val: Math.round(data.shipments * 0.25) },
    { month: 'May', val: Math.round(data.shipments * 0.38) },
  ];

  return (
    <div className="mt-6 h-64 w-full">
      <h3 className="mb-4 font-semibold text-slate-700">Monthly shipments</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
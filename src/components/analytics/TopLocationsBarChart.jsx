import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLocations } from "../../hooks/useLocations";

export const TopLocationsBarChart = () => {
  const { data: locations = [] } = useLocations();
  const sortedData = [...locations].sort((a, b) => b.shipments - a.shipments).slice(0, 5);

  return (
    <div className="h-80 w-full mt-8">
      <h3 className="mb-4">Top locations by shipments</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedData} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Bar dataKey="shipments" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
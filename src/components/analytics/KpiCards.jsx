import { useLocations } from "../../hooks/useLocations";

export const KpiCards = () => {
  const { data: locations = [] } = useLocations();
  
  const totalLocations = locations.length;
  const totalShipments = locations.reduce((sum, loc) => sum + (loc.shipments || 0), 0);
  const avgRating = (locations.reduce((sum, loc) => sum + (loc.rating || 0), 0) / (totalLocations || 1)).toFixed(1);

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="p-4 border rounded shadow"><h3>Total Shipments</h3><p className="text-2xl font-bold">{totalShipments}</p></div>
      <div className="p-4 border rounded shadow"><h3>Average Rating</h3><p className="text-2xl font-bold">{avgRating}</p></div>
      <div className="p-4 border rounded shadow"><h3>Active Locations</h3><p className="text-2xl font-bold">{totalLocations}</p></div>
    </div>
  );
};
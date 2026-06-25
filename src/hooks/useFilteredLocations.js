import { useSearchParams } from "react-router-dom";
import { useLocations } from "./useLocations";

export const useFilteredLocations = () => {
  const { data: locations = [], isLoading } = useLocations();
  const [searchParams] = useSearchParams();
  
  const search = searchParams.get("search")?.toLowerCase() || "";
  const sort = searchParams.get("sort") || "";

  let filtered = locations.filter(loc => loc.name.toLowerCase().includes(search));

  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "shipments") filtered.sort((a, b) => b.shipments - a.shipments);

  return { filteredLocations: filtered, isLoading };
};
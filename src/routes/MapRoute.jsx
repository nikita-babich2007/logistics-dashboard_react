import { useState } from "react";
import { Link } from "react-router-dom";
import { LocationFilters } from "../components/locations/LocationFilters";
import { useFilteredLocations } from "../hooks/useFilteredLocations";
import { LocationsMap } from "../components/map/LocationsMap";

export const MapRoute = () => {
  const { filteredLocations, isLoading } = useFilteredLocations();
  const [visibleLocations, setVisibleLocations] = useState([]);

  if (isLoading) return <div className="p-8 text-slate-500">Loading map...</div>;

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col space-y-4">
      <LocationFilters />
      
      <div className="flex flex-1 gap-6 overflow-hidden pb-4">
        {/* Карта */}
        <div className="z-0 flex-1 overflow-hidden rounded-xl border border-slate-200 shadow-sm relative">
          <LocationsMap locations={filteredLocations} onVisibleChange={setVisibleLocations} />
        </div>
        
        {/* Список видимих локацій праворуч */}
        <div className="w-96 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="mb-4 font-bold text-slate-900">
            Visible locations ({visibleLocations.length})
          </h2>
          
          {visibleLocations.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-slate-300">
              <p className="text-sm text-slate-500">No locations found</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {visibleLocations.map((loc) => (
                <li key={loc.id} className="rounded-lg border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-bold text-slate-900">{loc.name}</h3>
                    <span className="flex items-center gap-1 rounded bg-slate-200 px-2 py-1 text-xs font-semibold capitalize text-slate-700">
                      {loc.type || "Branch"}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-slate-600">{loc.address}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                    <span className="text-sm font-medium text-slate-700">
                      ⭐ {loc.rating || "4.5"}
                    </span>
                    <Link 
                      to={`/dashboard/location/${loc.id}`} 
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
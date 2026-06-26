import { useParams, Link } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import { useFavoritesStore } from "../store/favoritesStore";
import { Button } from "../components/ui/Button";
import { LocationMap } from "../components/map/LocationMap";
import { LocationShipmentsChart } from "../components/analytics/LocationShipmentsChart";

export const LocationDetailsRoute = () => {
  const { id } = useParams();
  const { data: location, isLoading } = useLocation(id);
  const { favoriteIds, toggleFavorite } = useFavoritesStore();

  if (isLoading) return <div className="p-8 text-slate-500">Loading location details...</div>;
  if (!location) return <div className="p-8 text-red-500">Location not found</div>;

  const isFavorite = favoriteIds.includes(id);

  return (
    <div className="max-w-6xl space-y-6">
      <Link to="/dashboard/map" className="inline-block text-sm font-medium text-slate-500 hover:text-slate-900">
        ← Back to map
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{location.name}</h1>
          <p className="mt-1 flex items-center gap-2 text-slate-500">
            <span>📍</span> {location.address}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 capitalize">
              {location.type || "Branch"}
            </span>
            <span className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
              Active
            </span>
            <span className="flex items-center gap-1 text-sm font-bold text-slate-700">
              ⭐ {location.rating || "4.5"}
            </span>
          </div>
        </div>
        <Button
          variant={isFavorite ? "outline" : "default"}
          onClick={() => toggleFavorite(id)}
          className={isFavorite ? "border-yellow-400 bg-yellow-50 text-yellow-700 hover:bg-yellow-100" : "bg-blue-600 text-white hover:bg-blue-700"}
        >
          {isFavorite ? "⭐ Saved" : "☆ Add to favorites"}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-sm text-slate-500">Shipments</p>
              <p className="text-2xl font-bold text-slate-900">{location.shipments || "1,520"}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-slate-500">Working hours</p>
              <p className="text-lg font-bold text-slate-900">08:00 - 20:00</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">City</p>
              <p className="text-lg font-bold text-slate-900 capitalize">{location.city || "Kyiv"}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <LocationShipmentsChart data={location} />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-slate-900">About this location</h3>
            <p className="leading-relaxed text-sm text-slate-600">
              Main branch in city center. Full-service office with parcel acceptance and delivery.
            </p>
          </div>

          <div className="h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
            <LocationMap lat={location.lat || 48.3794} lng={location.lng || 31.1656} name={location.name} />
          </div>
        </div>
      </div>
    </div>
  );
};
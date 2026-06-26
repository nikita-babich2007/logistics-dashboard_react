import { Link } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";
import { useFavoritesStore } from "../store/favoritesStore";

export const FavoritesRoute = () => {
  const { data: locations = [], isLoading } = useLocations();
  const { favoriteIds, removeFavorite } = useFavoritesStore();

  if (isLoading) return <div className="p-8">Loading favorites...</div>;

  const favoriteLocations = locations.filter(loc => favoriteIds.includes(loc.id));

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Favorites</h1>
        <p className="text-sm text-slate-500">Your saved locations</p>
      </div>

      {favoriteLocations.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
          <span className="mb-2 text-4xl text-slate-300">⭐</span>
          <p className="text-slate-500">No favorite locations yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {favoriteLocations.map((loc) => (
            <div key={loc.id} className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-bold text-slate-900">{loc.name}</h3>
                  <span className="flex items-center gap-1 rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    ⭐ Saved
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-500">{loc.address}</p>
                {loc.type && (
                  <span className="mb-4 inline-block rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 capitalize">
                    {loc.type}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <Link
                  to={`/dashboard/location/${loc.id}`}
                  className="flex-1 rounded-md border border-slate-300 bg-white py-2 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  View on map
                </Link>
                <button
                  onClick={() => removeFavorite(loc.id)}
                  className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
import { Link } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";
import { useFavoritesStore } from "../store/favoritesStore";

export default function FavoritesRoute() {
    const { data: locations, isLoading } = useLocations();
    const { favoriteIds, removeFavorite } = useFavoritesStore();

    if (isLoading) return <div>Loading favorites...</div>;

    const favoriteLocations = locations?.filter(loc => favoriteIds.includes(loc.id)) || [];
   
    return (
        <>
            <h1>Favorites</h1>
            {favoriteLocations.length === 0 ? (
                <p>No favorite locations yet</p>
            ) : (
                <ul>
                {favoriteLocations.map((loc) => (
                    <li key={loc.id}>
                    <p><strong>{loc.name}</strong></p>
                    <p>{loc.address}</p>
                    <Link to={`/dashboard/location/${loc.id}`}>View details</Link>
                    <button onClick={() => removeFavorite(loc.id)}>
                        Remove from Favorites
                    </button>
                    </li>
                ))}
                </ul>
            )}
        </>
    );
}
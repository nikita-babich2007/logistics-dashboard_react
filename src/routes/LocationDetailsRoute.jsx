import { useParams, Link } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import { useFavoritesStore } from "../store/favoritesStore";

export default function LocationDetailsRoute() {
    const { id } = useParams();
    const { data: location, isLoading, isError } = useLocation(id);
    const { favoriteIds, toggleFavorite } = useFavoritesStore();

    if (isLoading) return <div>Loading location...</div>;
    if (isError) return <div>Error loading location details.</div>;

    const isFavorite = favoriteIds.includes(id);

    return (
        <>
            <Link to="/dashboard/map">← Back to Map</Link>
            <h1>{location?.name}</h1>
            <p>Address: {location?.address}</p>
            <p>Type: {location?.type}</p>

            <button onClick={() => toggleFavorite(id)}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </>
    );
}
import { Link } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";

export default function MapRoute() {
    const { data: locations, isLoading, isError } = useLocations();

    if (isLoading) return <div>Loading map data...</div>;
    if (isError) return <div>Error loading locations.</div>;

    return (
        <>
            <h1>Map Page</h1>
            <ul>
                {locations.map((location) => (
                    <li key={loc.id}>
                        <p><strong>{loc.name}</strong></p>
                        <p>{loc.address}</p>
                        <Link to={`/dashboard/location/${loc.id}`}>View details</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
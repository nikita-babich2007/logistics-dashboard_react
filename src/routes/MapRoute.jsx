import { useLoaderData, Link } from "react-router-dom";

export default function MapRoute() {
    const locations = useLoaderData();

    return (
        <>
            <h1>Map</h1>
            <ul>
                {locations.map((location) => (
                <li key={location.id}>
                    <p><strong>Name:</strong> {location.name}</p>
                    <p><strong>Address:</strong> {location.address}</p>
                    <p><strong>Type:</strong> {location.type}</p>
                    <Link to={`/dashboard/location/${location.id}`}>View details</Link>
                </li>
                ))}
            </ul>
        </>
    );
}
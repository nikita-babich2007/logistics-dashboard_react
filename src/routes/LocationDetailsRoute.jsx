import { useLoaderData, Link } from "react-router-dom";

export default function LocationDetailsRoute() {
    const location = useLoaderData();

    return (
        <>
            <h1>Location Details</h1>  
            <Link to="/dashboard/map">Back to Map</Link>
            <div>
                <p><strong>Name:</strong> {location.name}</p>
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Type:</strong> {location.type}</p>
                <p><strong>Rating:</strong> {location.rating}</p>
            </div>
        </>
    );
}
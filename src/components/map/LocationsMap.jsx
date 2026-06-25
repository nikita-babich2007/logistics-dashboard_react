import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapBoundsHandler } from "./MapBoundsHandler";

export const LocationsMap = ({ locations, onVisibleChange }) => {
  const [bounds, setBounds] = useState(null);

  // Центр України за замовчуванням
  const center = [48.3794, 31.1656]; 

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={center} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapBoundsHandler setVisibleBounds={(b) => {
            setBounds(b);
            const visible = locations.filter(loc => b.contains([loc.lat, loc.lng]));
            if(onVisibleChange) onVisibleChange(visible);
        }} />
        
        {locations.map(loc => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
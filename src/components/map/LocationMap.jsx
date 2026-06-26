import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const LocationMap = ({ lat, lng, name }) => {
  return (
    <div className="h-full min-h-[300px] w-full overflow-hidden rounded-xl border">
      <MapContainer center={[lat, lng]} zoom={13} className="h-full w-full z-0">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
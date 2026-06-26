import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const MapEvents = ({ locations, onVisibleChange }) => {
  const map = useMapEvents({
    moveend: () => updateVisible(),
    zoomend: () => updateVisible(),
  });

  const updateVisible = () => {
    if (!map) return;
    const bounds = map.getBounds();
    const visible = locations.filter(loc =>
      bounds.contains([loc.lat || 48.3794, loc.lng || 31.1656])
    );
    onVisibleChange(visible);
  };

  useEffect(() => {
    updateVisible();
  }, [locations, map]);

  return null;
};

export const LocationsMap = ({ locations = [], onVisibleChange }) => {
  const defaultCenter = [48.3794, 31.1656];

  return (
    <MapContainer center={defaultCenter} zoom={6} className="h-full w-full z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapEvents locations={locations} onVisibleChange={onVisibleChange} />

      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat || defaultCenter[0], loc.lng || defaultCenter[1]]}>
          <Popup>
            <div className="font-semibold text-slate-900">{loc.name}</div>
            <div className="text-xs text-slate-500">{loc.address}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
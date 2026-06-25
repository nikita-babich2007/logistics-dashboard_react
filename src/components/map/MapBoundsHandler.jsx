import { useMapEvents } from "react-leaflet";

export const MapBoundsHandler = ({ setVisibleBounds }) => {
  useMapEvents({
    moveend: (e) => {
      setVisibleBounds(e.target.getBounds());
    },
  });
  return null;
};
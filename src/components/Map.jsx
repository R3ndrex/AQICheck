import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
    const position = [50.4501, 30.5236];
    return (
        <MapContainer className="map" center={position} zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
                url={`https://tiles.aqicn.org/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${
                    import.meta.env.VITE_TOKEN
                }`}
                attribution='Air quality data &copy; <a href="https://aqicn.org/">aqicn.org</a>'
                opacity={0.6}
            />
        </MapContainer>
    );
}

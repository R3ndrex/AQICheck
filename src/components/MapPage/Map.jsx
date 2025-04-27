import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position }) {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        const bounds = `${position[0] - 0.5},${position[1] - 0.5},${
            position[0] + 0.5
        },${position[1] + 0.5}`;

        fetch(
            `https://api.waqi.info/v2/map/bounds/?latlng=${bounds}&token=${
                import.meta.env.VITE_TOKEN
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "ok") {
                    setStations(data.data);
                } else {
                    console.error("Ошибка загрузки станций:", data.data);
                }
            })
            .catch((error) => {
                console.error("Ошибка при запросе:", error);
            });
    }, [position]);

    return (
        <MapContainer
            className="map"
            center={position}
            zoom={10}
            style={{ height: "100vh" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map((station) => (
                <Marker
                    key={station.uid}
                    position={[station.lat, station.lon]}
                    icon={L.icon({
                        iconUrl: `https://waqi.info/mapicon/${station.aqi}.30.png`,
                        iconSize: [40, 40],
                        iconAnchor: [20, 40],
                    })}
                >
                    <Popup>
                        <b>{station.station.name}</b>
                        <br />
                        AQI: {station.aqi}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

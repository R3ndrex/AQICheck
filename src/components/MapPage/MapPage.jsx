import { useOutletContext } from "react-router-dom";
import Map from "./Map";
const DEFAULT_POSITION = [51.5074, -0.1278];

const markerTypes = [
    { marker: "usepa-aqi", title: "Air Quality Index" },
    { marker: "usepa-pm25", title: "PM25" },
    { marker: "usepa-10", title: "PM10" },
    { marker: "usepa-o3", title: "O3" },
    { marker: "usepa-no2", title: "NO3" },
    { marker: "usepa-so2", title: "SO2" },
    { marker: "usepa-co", title: "CO" },
];

export default function MapPage() {
    const context = useOutletContext() || {};
    const { longitude, latitude } = context;
    return (
        <main className="flex flex-col gap-5 justify-center items-center m-5">
            {markerTypes.map(({ marker, title }) => (
                <section className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl capitalize ">{title}</h2>
                    <Map
                        position={
                            longitude && latitude
                                ? [latitude, longitude]
                                : DEFAULT_POSITION
                        }
                        markerType={marker}
                    />
                </section>
            ))}
        </main>
    );
}

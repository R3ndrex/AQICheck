import Map from "./Map";

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
    const position = [51.5074, -0.1278];

    return (
        <main className="flex flex-col gap-5 justify-center items-center m-5">
            {markerTypes.map(({ marker, title }) => {
                return (
                    <section className="flex flex-col justify-center items-center">
                        <h2 className="text-2xl capitalize ">{title}</h2>
                        <Map position={position} markerType={marker} />
                    </section>
                );
            })}
        </main>
    );
}

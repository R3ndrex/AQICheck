import Map from "./Map";
export default function MapPage() {
    const position = [50.4501, 30.5236];
    const markerTypes = [
        "usepa-aqi",
        "usepa-pm25",
        "usepa-10",
        "usepa-o3",
        "usepa-no2",
        "usepa-so2",
        "usepa-co",
    ];
    return (
        <main className="flex justify-center items-center m-5">
            {markerTypes.map((markerType) => {
                return <Map position={position} markerType={markerType} />;
            })}
        </main>
    );
}

import { useOutletContext } from "react-router-dom";
import Map from "./Map";
const DEFAULT_POSITION = [51.5074, -0.1278]; // London

export default function MapPage() {
    const context = useOutletContext() || {};
    const { longitude, latitude } = context;
    return (
        <main className="flex flex-col gap-5 justify-center items-center mt-5">
            <section className="flex flex-col justify-center items-center">
                <h2 className="text-2xl capitalize">Air Quality Index</h2>
                <Map
                    position={
                        longitude && latitude
                            ? [latitude, longitude]
                            : DEFAULT_POSITION
                    }
                />
            </section>
        </main>
    );
}

export default function DataSection({ data }) {
    return (
        <section>
            <h1>{data.data.city.name}</h1>
            <p>AQI: {data.data.aqi}</p>
        </section>
    );
}

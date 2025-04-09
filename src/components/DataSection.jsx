export default function DataSection({ data }) {
    return (
        <>
            <section>
                <h1>{data.data.city.name}</h1>
                <p>AQI: {data.data.aqi}</p>
            </section>
            <section>
                <h2>o3 Forecast</h2>
                {data.data.forecast.daily.o3.map((day) => (
                    <>
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </>
                ))}
            </section>
            <section>
                <h2>pm10 Forecast</h2>
                {data.data.forecast.daily.pm10.map((day) => (
                    <>
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </>
                ))}
            </section>
            <section>
                <h2>pm25 Forecast</h2>
                {data.data.forecast.daily.pm25.map((day) => (
                    <>
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </>
                ))}
            </section>
            <section>
                <h2>UVI Forecast</h2>
                {data.data.forecast.daily.uvi.map((day) => (
                    <>
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </>
                ))}
            </section>
        </>
    );
}

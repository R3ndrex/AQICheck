export default function DataSection({ data }) {
    return (
        <main className="flex gap-5 flex-col items-center">
            <section>
                <h1 className="text-2xl">{data.data.city.name}</h1>
                <p>AQI: {data.data.aqi}</p>
            </section>
            <section className="inline-flex gap-5 border-1 ">
                <h2>o3 Forecast</h2>
                {data.data.forecast.daily.o3.map((day) => (
                    <div className="flex flex-col">
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </div>
                ))}
            </section>
            <section className="inline-flex gap-5 border-1 ">
                <h2>pm10 Forecast</h2>
                {data.data.forecast.daily.pm10.map((day) => (
                    <div className="flex flex-col">
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </div>
                ))}
            </section>
            <section className="inline-flex gap-5 border-1 ">
                <h2>pm25 Forecast</h2>
                {data.data.forecast.daily.pm25.map((day) => (
                    <div className="flex flex-col">
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </div>
                ))}
            </section>
            <section className="inline-flex gap-5 border-1 ">
                <h2>UVI Forecast</h2>
                {data.data.forecast.daily.uvi.map((day) => (
                    <div className="flex flex-col">
                        <h3>Day: {day.day}</h3>
                        <ul>
                            <li>Max: {day.max}</li>
                            <li>Min: {day.min}</li>
                            <li>Average: {day.avg}</li>
                        </ul>
                    </div>
                ))}
            </section>
        </main>
    );
}

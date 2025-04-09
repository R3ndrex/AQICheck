import PollutionForecast from "./PollutionForecast";
export default function DataSection({ data }) {
    return (
        <main className="flex gap-5 flex-col items-center">
            <section>
                <h1 className="text-2xl">{data.data.city.name}</h1>
                <p>AQI: {data.data.aqi}</p>
            </section>
            <PollutionForecast
                pollutionData={data.data.forecast.daily.o3}
                pollutionName={"O3"}
            />
            <PollutionForecast
                pollutionData={data.data.forecast.daily.pm10}
                pollutionName={"PM10"}
            />
            <PollutionForecast
                pollutionData={data.data.forecast.daily.pm25}
                pollutionName={"PM25"}
            />
            <PollutionForecast
                pollutionData={data.data.forecast.daily.uvi}
                pollutionName={"UVI"}
            />
        </main>
    );
}

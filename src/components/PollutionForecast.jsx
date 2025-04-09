import PollutionChart from "./PollutionChart";

export default function PollutionForecast({ pollutionData, pollutionName }) {
    return (
        <section className="inline-flex gap-5 border-1">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">{pollutionName} Forecast</h2>
                <PollutionChart
                    data={pollutionData}
                    dataKeys={["avg", "max", "min"]}
                />
            </div>
            {pollutionData.map((day) => (
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
    );
}

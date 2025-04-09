import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";
export default function PollutionChart({ data, dataKeys }) {
    function formatDate(date) {
        const newDate = new Date(date);
        return `${String(newDate.getMonth()).padStart(2, 0)}.${String(
            newDate.getDay()
        ).padStart(2, 0)}`;
    }
    return (
        <LineChart height={500} width={500} data={data}>
            {dataKeys.map((key) => (
                <Line
                    type="monotone"
                    dataKey={key}
                    stroke={
                        key === "max"
                            ? "#ff0000"
                            : key === "min"
                            ? "#008000"
                            : "#ffd900"
                    }
                />
            ))}

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={"day"} tickFormatter={formatDate} />
            <Tooltip />
        </LineChart>
    );
}

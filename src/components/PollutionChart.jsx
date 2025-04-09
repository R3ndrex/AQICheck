import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
export default function PollutionChart({ data, dataKeys }) {
    console.log(data);

    return (
        <LineChart height={500} width={500} data={data}>
            {dataKeys.map((key) => {
                return <Line type="monotone" dataKey={key} stroke="#8884d8" />;
            })}

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={"day"} />
        </LineChart>
    );
}

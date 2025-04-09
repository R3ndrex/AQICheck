import "./App.css";
import DataSection from "./components/DataSection.jsx";
import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        const controller = new AbortController();
        setError(null);
        setData(null);
        setLoading(true);
        async function fetchData() {
            const response = await fetch(
                `https://api.waqi.info/feed/${inputValue}/?token=${
                    import.meta.env.VITE_TOKEN
                }`,
                {
                    signal: controller.signal,
                }
            );
            if (!response.ok)
                throw new Error("There is a problem with fetching data");

            const json = await response.json();
            return json;
        }
        fetchData()
            .then((response) => {
                setData(response);
                console.log(response);
                setError(null);
            })
            .catch((error) => {
                if (error.name !== "AbortError") setError(error.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <h1>Enter your city</h1>
            <input
                type="text"
                name="city"
                id="city"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>

            <>{data && <DataSection data={data} />}</>
            <>{error && <h2>Error: {error}</h2>}</>
            <>{loading && <h2>Loading</h2>}</>
        </>
    );
}

export default App;

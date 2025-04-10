import DataSection from "./components/DataSection.jsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
function App() {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    function handleSubmit() {
        setError(null);
        setData(null);
        setLoading(true);
        async function fetchData() {
            const response = await fetch(
                `https://api.waqi.info/feed/${inputValue}/?token=${
                    import.meta.env.VITE_TOKEN
                }`
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
    function showAside() {
        if (ref.current.classList.contains("visible")) {
            ref.current.classList.remove("visible");
        } else {
            ref.current.classList.add("visible");
        }
    }
    return (
        <>
            <header className="flex flex-col justify-center items-center">
                <h1 className="text-2xl">AQI Check</h1>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </header>
            <>{data && <DataSection data={data} />}</>
            <>{error && <h2>Error: {error}</h2>}</>
            <>{loading && <h2>Loading</h2>}</>
            <div className="burger" onClick={showAside}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <aside ref={ref}>
                <Link to={"/map"}>View Map</Link>
            </aside>
        </>
    );
}

export default App;

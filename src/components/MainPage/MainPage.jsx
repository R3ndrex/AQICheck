import { useOutletContext } from "react-router-dom";
import DataSection from "./DataSection.jsx";
import { useState } from "react";
function MainPage() {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const userLocation = useOutletContext();

    async function fetchData(request) {
        const response = await fetch(
            `https://api.waqi.info/feed/${request}/?token=${
                import.meta.env.VITE_TOKEN
            }`
        );
        if (!response.ok)
            throw new Error("There is a problem with fetching data");

        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.data);
        }
        return json;
    }

    function handleSubmit() {
        setError(null);
        setData(null);
        setLoading(true);
        fetchData(inputValue)
            .then((response) => {
                setData(response);
                setError(null);
            })
            .catch((error) => {
                if (error.name !== "AbortError") setError(error.message);
                setData(null);
            })
            .finally(() => setLoading(false));
    }
    function handleSubmitExact() {
        setError(null);
        setData(null);
        setLoading(true);

        if (userLocation) {
            fetchData(`geo:${userLocation.latitude};${userLocation.longitude}`)
                .then((response) => {
                    setData(response);
                    setError(null);
                })
                .catch((error) => {
                    if (error.name !== "AbortError") setError(error.message);
                    setData(null);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
            setError("Browser doesn't support geolocation");
        }
    }

    return (
        <>
            <header className="flex flex-col justify-center items-center m-5">
                <h1 className="text-2xl">AQI Check</h1>
                <input
                    type="text"
                    required
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                    autoFocus
                    className="p-1"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex gap-5">
                    <button
                        className="cursor-pointer"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Get data
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={handleSubmitExact}
                    >
                        Get exact data
                    </button>
                </div>
            </header>
            <>
                {error && (
                    <h2 className="text-2xl text-red-500 mt-5 flex items-center justify-center">
                        Error: {error}
                    </h2>
                )}
            </>
            <>{data && <DataSection data={data} />}</>
            <>
                {loading && (
                    <div className="flex mt-5 items-center justify-center">
                        <div className="loader"></div>
                    </div>
                )}
            </>
        </>
    );
}

export default MainPage;

import DataSection from "./DataSection.jsx";
import { useState } from "react";

function MainPage() {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
            if (json.status === "error") {
                throw new Error(json.data);
            }
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
                <button
                    className="cursor-pointer"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
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

import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Template() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (err) => {
                    console.error(
                        `Geolocation Error: ${err.message}\n Error code: ${err.code}`
                    );
                }
            );
        }
    }, []);
    return (
        <>
            <div
                onClick={(e) => {
                    if (ref && !ref.current.contains(e.target) && visible) {
                        setVisible(false);
                    }
                }}
            >
                <Outlet context={userLocation} />
                <button
                    className="burger cursor-pointer m-5 mt-1 absolute top-0 right-0 w-[3rem] h-[3rem]"
                    onClick={() => setVisible((prev) => !prev)}
                >
                    <div className="h-[1rem]"></div>
                    <div className="h-[1rem]"></div>
                    <div className="h-[1rem]"></div>
                </button>
            </div>
            <aside
                ref={ref}
                className={`fixed h-[100%] text-2xl flex flex-col gap-5 items-center top-0 right-0 p-1 bg-emerald-200 h-[100vh] w-[25%] ease-in-out duration-[1s] transition ${
                    visible ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <Link className="mt-8" to={"/map"}>
                    View Map
                </Link>
                <Link to={""}>View Main Page</Link>
            </aside>
        </>
    );
}

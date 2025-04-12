import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Template() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Outlet />
            <div
                className="burger m-5 absolute top-0 right-0 w-[3rem] h-[3rem]"
                onClick={() => setVisible((prev) => !prev)}
            >
                <div className="h-[1rem]"></div>
                <div className="h-[1rem]"></div>
                <div className="h-[1rem]"></div>
            </div>
            <aside
                className={`absolute text-2xl flex flex-col gap-5 justify-center items-center top-0 right-0 bg-emerald-200 h-[100vh] w-[25%] ${
                    visible ? "" : "invisible"
                }`}
            >
                <Link to={"/map"}>View Map</Link>
                <Link to={""}>View Main Page</Link>
            </aside>
        </>
    );
}

import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Template() {
    const ref = useRef();
    function showAside() {
        if (ref.current.classList.contains("visible")) {
            ref.current.classList.remove("visible");
        } else {
            ref.current.classList.add("visible");
        }
    }
    return (
        <>
            <Outlet />
            <div className="burger m-5" onClick={showAside}>
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

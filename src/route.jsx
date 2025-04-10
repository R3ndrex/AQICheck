import App from "./App";
import Map from "./components/Map";

export const route = [
    {
        path: "",
        element: <App />,
    },
    {
        path: "/map",
        element: <Map />,
    },
];

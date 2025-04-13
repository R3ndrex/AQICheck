import App from "./App";
import MapPage from "./components/MapPage";
import Template from "./components/Template";
export const route = [
    {
        path: "",
        element: <Template />,
        children: [
            { index: true, element: <App /> },
            {
                path: "/map",
                element: <MapPage />,
            },
        ],
    },
];

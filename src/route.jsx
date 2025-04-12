import App from "./App";
import Map from "./components/Map";
import Template from "./components/Template";
export const route = [
    {
        path: "",
        element: <Template />,
        children: [
            { index: true, element: <App /> },
            {
                path: "/map",
                element: <Map />,
            },
        ],
    },
];

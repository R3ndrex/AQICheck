import MainPage from "./components/MainPage/MainPage";
import MapPage from "./components/MapPage/MapPage";
import Template from "./components/Template";
export const route = [
    {
        path: "",
        element: <Template />,
        children: [
            { index: true, element: <MainPage /> },
            {
                path: "/map",
                element: <MapPage />,
            },
        ],
    },
];

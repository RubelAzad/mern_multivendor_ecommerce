import { lazy } from "react";
const Home = lazy(()=>import("../../views/Home"));

export const sellerRoutes = [
    {
        path: "seller",
        element: <Home/>,
        ability: ['admin','seller']
    }
]
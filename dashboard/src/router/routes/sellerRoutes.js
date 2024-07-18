import { lazy } from "react";
const Home = lazy(()=>import("../../views/Home"))
const SellerDashboard = lazy(()=>import("./../../views/seller/SellerDashboard"))
const AddProduct = lazy(()=>import("./../../views/seller/AddProduct"))
const AllProduct = lazy(()=>import("./../../views/seller/Products"))
const DiscountProducts = lazy(()=>import("./../../views/seller/DiscountProducts"))
const Order = lazy(()=>import("./../../views/seller/Order"))

export const sellerRoutes = [
    {
        path: "/",
        element: <Home/>,
        ability: ['admin','seller']
    },
    {
        path: "seller/dashboard",
        element: <SellerDashboard/>,
        ability: ['seller']
    },
    {
        path: "seller/dashboard/add-product",
        element: <AddProduct/>,
        ability: ['seller']
    },
    {
        path: "seller/dashboard/products",
        element: <AllProduct/>,
        ability: ['seller']
    },
    {
        path: "seller/dashboard/discount-products",
        element: <DiscountProducts/>,
        ability: ['seller']
    },
    {
        path: "seller/dashboard/orders",
        element: <Order/>,
        ability: ['seller']
    }
]
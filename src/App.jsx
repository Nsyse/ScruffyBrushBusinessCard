import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Layout/Layout.jsx";
import AboutPage from "./About/AboutPage.jsx";
import Commissions from "./Commissions/Commissions.jsx";
import Tos from "./Tos/Tos.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"about",
                element: <AboutPage/>,
            },
            {
                index : true,
                element: <Commissions/>,
            },
            {
                path:"tos",
                element: <Tos/>,
            }
        ]
    },
]);

export default function App() {
    return <RouterProvider router={router}/>
}

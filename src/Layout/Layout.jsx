import '../App.css'
import "./layout.css"
import Icon from "../Icon.jsx";
import FooterSocials from "../FooterSocials.jsx";
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Layout() {
    return (
        <>
            <div className="card">

                <Icon/>
                <NavBar/>
                <div className="roundCard">
                    <Outlet/>
                </div>
            </div>
            <FooterSocials/>
        </>
    )
}
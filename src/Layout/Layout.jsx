import '../App.css'
import "./layout.css"
import Icon from "../Icon.jsx";
import FooterSocials from "../FooterSocials.jsx";
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Layout() {
    return (
        <>
            <div className="horizontal-content">
                <Icon/>
                <div className="card">

                    <div className="vertical-content">
                        <NavBar/>
                        <div className="roundCard">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSocials/>
        </>
    )
}
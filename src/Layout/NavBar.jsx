import {NavLink} from "react-router-dom";
import "./layout.css"

export default function NavBar() {

    function setActiveStyle({isActive}){
        return isActive ? "navTab navTab-active" : "navTab";
    }

    return <nav className="navbar">
        <NavLink to="/" className={setActiveStyle}>Prices</NavLink>
        <NavLink to="/tos" className={setActiveStyle}>TOS</NavLink>
        <NavLink to="/about" className={setActiveStyle}>About</NavLink>
    </nav>
}
import '../App.css'
import About from "./About.jsx";
import Formation from "./Formation.jsx";

export default function AboutPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flexShrink:1,
        }}>
            <About/>
        </div>
    )
}

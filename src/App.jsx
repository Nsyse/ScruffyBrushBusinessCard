import './App.css'
import Icon from "./Icon.jsx";
import EmailButton from "./EmailButton.jsx";
import About from "./About.jsx";
import Formation from "./Formation.jsx";
import FooterSocials from "./FooterSocials.jsx";

function App() {
    return (
        <>
            <div className="card">
                <Icon/>
                <h1 className="signature">ScruffyBrush</h1>
                <h2>Software Bard</h2>
                <EmailButton />
                <About/>
                <Formation/>
            </div>
            <FooterSocials/>
        </>
    )
}

export default App

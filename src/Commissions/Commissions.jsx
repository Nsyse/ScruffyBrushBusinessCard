import '../App.css'
import "./commissions.css"
import CommissionExample from "./CommissionExample.jsx";

export default function Commissions() {
    return (
        <>
            <div className="centeredBlurb">
                <CommissionExample
                    price={20}
                    title={"64x64 Headshot"}
                    src="./images/examples/LyzeGB_Headshot.png"
                />
                <CommissionExample
                    price={30}
                    title={"Phone background"}
                    src="./images/examples/Lyze_GB.png"
                />
                <div style ={{width:"70%"}}>(All prices in USD)</div>
            </div>
        </>
    )
}
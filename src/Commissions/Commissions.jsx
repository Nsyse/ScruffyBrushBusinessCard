import '../App.css'
import "./commissions.css"
import CommissionExample from "./CommissionExample.jsx";

export default function Commissions() {
    return (
        <>
            <div className="centeredBlurb">
                <CommissionExample
                    price={20}
                    title={"160x144 Headshot"}
                    src="./images/examples/LyzeGB_Headshot.png"
                />
                <CommissionExample
                    price={30}
                    title={"Fullbody phone background"}
                    src="./images/examples/TannyTTRPG_Druid.png"
                />
            </div>
        </>
    )
}
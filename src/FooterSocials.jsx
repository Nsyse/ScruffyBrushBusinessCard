import './App.css'
import EmailButton from "./EmailButton.jsx";


function Footer() {
    return (
        <div className="footer">
            <div className="footerSocials">
                <a className="social-link" href="https://www.twitch.tv/scruffybrush" target="_blank">
                    <img className="social-icon" src="./images/Twitch_icon.png" alt="Letter Icon"
                         href="https://www.twitch.tv/scruffybrush"/>
                </a>
                <a className="social-link" href="https://meow.social/@ScruffyBrush" target="_blank">
                    <img className="social-icon" src="./images/Mastodon_icon.png" alt="Letter Icon"/>
                </a>
                <a className="social-link" href="https://t.me/ScruffyBrush" target="_blank">
                    <img className="social-icon" src={"./images/Telegram_icon.png"} alt="Letter Icon"/>
                </a>
            </div>
            <div className="discord-div">
                <img className="social-icon social-icon-small" src="./images/Discord_icon.png" alt="Letter Icon"/>
                <h3 style={{margin: "0px"}}>@ScruffyBrush</h3>
                <EmailButton/>
            </div>
        </div>
    )
}

export default Footer

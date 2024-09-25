import './App.css'

function Footer() {
    return (
        <>
            <div className="footerSocials">
                <a className="social-link" href="https://www.twitch.tv/scruffybrush" target="_blank">
                    <img className="social-icon" src="./images/Twitch_icon.png" alt="Letter Icon"
                         href="https://www.twitch.tv/scruffybrush"/>
                </a>
                <a className="social-link" href="https://meow.social/@ScruffyBrush" target="_blank">
                    <img className="social-icon" src="./images/Mastodon_icon.png" alt="Letter Icon"/>
                </a>
                <a className="social-link" href="https://t.me/ScruffyBrush" target="_blank">
                    <img className="social-icon" src="./images/Telegram_icon.png" alt="Letter Icon"/>
                </a>
                <div className="discord-div">
                    <img className="social-icon" src="./images/Discord_icon.png" alt="Letter Icon"/>
                    <h3>@ScruffyBrush</h3>
                </div>
            </div>
        </>
    )
}

export default Footer

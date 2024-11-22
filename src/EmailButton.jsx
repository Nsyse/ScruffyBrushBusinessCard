import './App.css'

function EmailButton() {
    return (
        <a href="mailto:the.nsyse@gmail.com" className="email-button-wrapper">
            <button className="btn btn-success email-button">
                <img className="button-icon" src="./images/Mail.png" alt="Letter Icon"/>
                Email
            </button>
        </a>
    )
}

export default EmailButton

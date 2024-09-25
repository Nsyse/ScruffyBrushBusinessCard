import './App.css'

function EmailButton() {
    return (
        <a href="mailto:the.nsyse@gmail.com">
            <button className="btn btn-success">
                <img className="button-icon" src="./images/Mail.png" alt="Letter Icon"/>
                Email
            </button>
        </a>
    )
}

export default EmailButton

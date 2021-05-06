//Credentials component
function Credentials() {
    return (
        <div className="credentials-view-wrapper-container">

            <div className="credentials-view-email-container">
                <div>Email:</div>
                <input placeholder="Email"></input>
            </div>

            <div className="credentials-view-gamertag-container">
                <div>Gamertag:</div>
                <input placeholder="Gamertag"></input>
            </div>

            <div className="credentials-view-password-container">
                <div>Password:</div>
                <input placeholder="Password"></input>
            </div>

            <div className="credentials-view-confirm-password-container">
                <div>Confirm Password:</div>
                <input placeholder="Password"></input>
            </div>

            <div className="credentials-view-save-button">
                <button>Save and Continue</button>
            </div>
        </div>
    )
}

export default Credentials;

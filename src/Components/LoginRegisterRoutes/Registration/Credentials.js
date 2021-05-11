import React, {useState} from 'react'
import {registerUser} from '../../../ducks/userReducer'
import {connect} from 'react-redux'

//Credentials component
const Credentials = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    

    const nextView = () => {
        if(password === password2) {
            props.setNewProfile({
                ...props.actualProfile,
                email,
                password 
            }) } else {
                alert("Passwords do NOT match!")
            }
        props.setIndexTracker(2)
    }

    


    return (
        <div className="credentials-view-wrapper-container">

            <div className="credentials-view-email-container">
                <div>Email:</div>
                <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                {email}
            </div>

            <div className="credentials-view-password-container">
                <div>Password:</div>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                {password}
            </div>

            <div className="credentials-view-confirm-password-container">
                <div>Confirm Password:</div>
                <input placeholder="Password" type="password" onChange={(e) => setPassword2(e.target.value)}></input>
                {password2}
            </div>
        
            <div className="credentials-view-save-button">
                <button onClick={() => nextView()}>Save and Continue</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect (mapStateToProps,{registerUser})(Credentials);

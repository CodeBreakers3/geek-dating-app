//Login component
import React, { useState }from 'react'
import axios from "axios"
import {loginUser} from '../../ducks/userReducer'
import {getViewableProfiles} from '../../ducks/profileReducer'
import {connect} from 'react-redux'



const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);

    const login = async () => {
        let loggedInUser = '';
        
        try {
            loggedInUser = await axios.post('/auth/login', {email, password})
        }
        catch (err){
            setFailedLogin(true)
        }
       
        // Next step: give redux or object we got from backend
        props.loginUser(loggedInUser.data)
        console.log(props)
        props.history.push('/');
        

        // Next step: get swipe-able profiles onto redux
        
        // props.getViewableProfiles(props.userReducer.user.profile_id)
    }


    return (
        <div className="login-view-wrapper-container">

            <div className="login-view-image-container">
            <img alt="Main OneUp Logo"></img>
            </div>
             {failedLogin ? <div>Invalid U/P</div> : null}
            <div className="login-view-login-details-container">

                <div className="login-view-login-details-email-container">
                    <p>Email:</p>
                    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="login-view-login-details-password-container">
                    <p>Password:</p>
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div className="login-view-login-details-login-button-container">
                    <button onClick={login}>Log In</button>
                </div>
            </div>
        </div>
        
    )
}



const mapStateToProps = reduxState => {
    return reduxState
}
export default connect (mapStateToProps,{loginUser, getViewableProfiles})(Login);
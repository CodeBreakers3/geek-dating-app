//Login component
import React, { useState }from 'react'
import axios from "axios"
import {loginUser} from '../../ducks/userReducer'
import {connect} from 'react-redux'
import BackButton from './../inAppRoutes/BackButton';
// import '../../Logo/OneUpLogo.png'
import './Registration/CSS/Login.css'


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
            return
        }
       
        // Next step: give redux or object we got from backend
        props.loginUser(loggedInUser.data);
        props.history.push('/');
        

        // // add the logged in user to local storage
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser.data));
        
        // Next step: give redux or object we got from backend
        props.loginUser(loggedInUser.data);
        
        props.history.push('/');
    }


    return (
        <div className="login-view-wrapper-container">
            <div className="login-view-border">
                <BackButton/>

                    <div className="login-view-logo-container">
                    <img className="login-view-logo" src="logo_style_3.png" alt="Main OneUp Logo"></img>
                    </div>
                    {failedLogin ? <div>Invalid U/P</div> : null}
                <div className="login-view-login-details-container">

                    <div className="login-view-login-details-email-container">
                        <p className="text-area">Email:</p>
                        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="login-view-login-details-password-container">
                        <p className="text-area">Password:</p>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div className="login-view-login-details-login-button-container" >
                        <button className="login-view-login-details-login-button" onClick={login}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}



const mapStateToProps = reduxState => {
    return reduxState
}
export default connect (mapStateToProps,{loginUser})(Login);
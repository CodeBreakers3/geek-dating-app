import React from 'react'
import { Link } from 'react-router-dom'
import './Registration/CSS/AuthHome.css'

function AuthHome (){
  
        return (
            <div className="auth-view-wrapper-container">
                <div className="auth-view-border">
                    <div classname="auth-view-main-logo-container">
                        <img className="main-logo" src="logo_style_3.png" alt="Main OneUp Logo"></img>
                    </div>

                    <div className="auth-view-options-container">
                        
                            <div className="log-in-wrapper">
                                <Link to="/login">
                                    <h2 className="log-in">Log In</h2></Link>
                            </div>
                            
                            <div className="sign-up-wrapper">
                                <Link to="/registerpath">
                                    <h2 className="sign-up">Sign Up</h2></Link>
                            </div>

                    </div>
                    
                </div>

            </div>
        )
    
}


export default AuthHome;

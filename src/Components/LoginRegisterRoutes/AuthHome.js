import React from 'react'
import { Link } from 'react-router-dom'



function AuthHome (){
  
        return (
            <header>
                <div> Auth</div>
                <Link to="/login">Log In</Link>
                <Link to="/credentials">Sign Up</Link>
            </header>
        )
    
}


export default AuthHome;

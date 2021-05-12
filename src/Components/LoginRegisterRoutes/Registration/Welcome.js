import axios from 'axios';
import React, {useState} from 'react'
import { Link } from "react-router-dom";

//Welcome component
const Welcome = (props) => {

        
    //    Connect props functions to buttons
    
 
    return (
        <div>
            <div>
                <p>Welcome!</p>
            </div>

            <div>
                    {/* <button onClick={() => props.createNewUser()}>I agree to the guidelines</button> */}

                <Link to='/login'>
                    <button onClick={() => props.createNewUser()}>Venture Forth!</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;
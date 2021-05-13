import axios from 'axios';
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import BackButton2 from '../BackButton2';

//Welcome component
const Welcome = (props) => {
    return (
        <div>
            <div>
                <p>Welcome!</p>
            </div>

            <div>
                    {/* <button onClick={() => props.createNewUser()}>I agree to the guidelines</button> */}

                <Link to='/login'>
                    <button>Venture Forth!</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;
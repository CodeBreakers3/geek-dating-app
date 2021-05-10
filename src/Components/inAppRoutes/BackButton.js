//non component imports
import React from 'react'
import './backbutton.css';
import {useHistory} from 'react-router-dom';

//BackButton component
const BackButton = () => {
let history = useHistory()

    return (
        <div className="back-button-component" onClick={() => history.goBack()}>
            <div className="back-button-icon-container">
                <img alt="back button" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/back3.svg"/>
            </div>
        </div>
    )
}

export default BackButton;
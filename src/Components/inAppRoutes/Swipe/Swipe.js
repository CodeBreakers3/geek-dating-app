//non-component imports
import React from 'react'
import './swipe.css';
import {useState} from 'react';
import {connect} from 'react-redux'

//component imports
import Matched from './Matched';
import ProfileSmall from './ProfileSmall';
import Header from './../../Header';

//Swipe component
function Swipe(props) {
    
    const [isMatch, setIsMatch] = useState(false);

    const likeProfile = () => {
        //THIS FUNCTION STILL TO BE BUILT - need data from redux
        alert(`You've liked someone!`);
    }

    const dislikeProfile = () => {
        //THIS FUNCTION STILL TO BE BUILT - need data from redux
        alert(`You've disliked someone.`);
    }

    const mainDisplay =
                <div className="swipe-main-display-container">
                    <ProfileSmall matched={false}/>
                    <div className="swipe-main-display-buttons-container">
                        <div className="swipe-main-display-icon-container" onClick={dislikeProfile}>
                            <div className="swipe-main-display-icon">
                                <img alt="dislike-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/dislike2.svg"/>
                            </div>
                        </div>

                        <div className="swipe-main-display-icon-container" onClick={likeProfile}>
                            <div className="swipe-main-display-icon">
                                <img alt="like-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/like2.svg"/>
                            </div>
                        </div>
                    </div>
                </div>

    return (
        <div className="main-display">
            {isMatch?null:<Header/>}
            {isMatch?<Matched setIsMatch={setIsMatch}/>:mainDisplay}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps)(Swipe);
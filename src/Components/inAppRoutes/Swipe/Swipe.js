//non-component imports
import './swipe.css';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

//component imports
import Matched from './Matched';
import ProfileSmall from './ProfileSmall';
import Header from './../../Header';
import {getProfiles} from '../../../ducks/profileReducer';

//Swipe component
function Swipe(props) {
    //isMatch has 3 potential values: match, main, empty
    const [isMatch, setIsMatch] = useState("main");
    const [idx, setIdx] = useState(0);


    //this useEffect is intended to run ONCE, when the user logs in and their profile ID is populated in redux. After that this useEffect does not run EXCEPT for when the user navigates back here from the header. Which is why the if statement is there to check for the final profile, for that specific scenario.
    useEffect(()=>{
        if (props.profileReducer.viewableProfiles.length===1) {
            setIsMatch("empty");
        }
        props.getProfiles(props.userReducer.user.profile_id);
    },[props.userReducer.user.profile_id]);

    const forward = () => { 
        if (idx === props.profileReducer.viewableProfiles.length-1) {
            setIdx(0);
        } else {
            setIdx(idx+1);
        }
    };

    const like = async () => {
        //add the like to the database and check the db for a corresponding like. If there is a corresponding like then matchCheck will equal the match from the match table in the db. If there is no corresponding like then matchCheck will equal false.
        let matchCheck = null;
        try {
            let data = await axios.post(`/api/like/${props.userReducer.user.profile_id}/liked/${props.profileReducer.viewableProfiles[idx].profile_id}`);
            matchCheck = data.data;
        } catch (err) {
            console.log("Error updating DB with the like data - " + err);
        }

        //check the results of the like in the DB, if there was a match, then display the matched component. 
        if(matchCheck) {
            setIsMatch("match");
            return;
        }

        //update the viewable profiles array
        props.getProfiles(props.userReducer.user.profile_id);

        //check for the end of the viewable profiles array, if its the end, send the user back to the beginning
        if (idx === props.profileReducer.viewableProfiles.length-1) {
            setIdx(0);
        }
        //check to see if the viewable profiles have run out. If so display the empty message to the user
        if (props.profileReducer.viewableProfiles.length===1) {
            setIsMatch("empty");
        }
    };


    const mainDisplay =
                <div className="swipe-main-display-container">
                    <ProfileSmall idx={idx} matched={isMatch}/>
                    <div className="swipe-main-display-buttons-container">
                        <div className="swipe-main-display-icon-container" >
                            <div className="swipe-main-display-icon">
                                <img onClick={forward} alt="dislike-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/dislike2.svg"/>
                            </div>
                        </div>

                        <div className="swipe-main-display-icon-container">
                            <div className="swipe-main-display-icon">
                                <img onClick={like} alt="like-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/like2.svg"/>
                            </div>
                        </div>
                    </div>
                </div>

    const noMoreProfiles = 
        <div className="swipe-main-display-container">
            <p>No more profiles left to view. Come back later to see more!</p>
        </div>

    return (
        <div className="main-display">
            {(isMatch==="main" || isMatch==="empty")?<Header/>:null}
            {(isMatch==="main")?mainDisplay:null}
            {(isMatch==="match")?<Matched idx={idx} setIsMatch={setIsMatch} forward={forward}/>:null}
            {(isMatch==="empty")?noMoreProfiles:null}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{getProfiles})(Swipe);
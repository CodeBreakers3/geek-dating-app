//non-component imports
import React from 'react'
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
    const [isMatch, setIsMatch] = useState(false);
    const [idx, setIdx] = useState(0);
    const {viewableProfiles}=props.profileReducer;
    const {profile_id}=props.userReducer.user;


    useEffect(()=>{
        console.log("hit");
        props.getProfiles(profile_id);
    },[idx, profile_id]);

    const back = () => {  
        let i = idx
        if(idx>0){
          i--
            setIdx(i)
        };
    };
    
    
    const forward = () => { 
        let i = idx;
        if(idx < viewableProfiles.length){
            i++;
            setIdx(i);
        } else {
            setIdx(0);
        }
    };

    const like = async () => {
        //add the like to the database and check the db for a corresponding like. If there is a corresponding like then matchCheck will equal the match from the match table in the db. If there is no corresponding like then matchCheck will equal false.
        let matchCheck = null;
        try {
            console.log(idx);
            let data = await axios.post(`/api/like/${profile_id}/liked/${props.profileReducer.viewableProfiles[idx].profile_id}`);
            matchCheck = data.data;
        } catch (err) {
            console.log("Error updating DB with the like data - " + err);
        }

        //check the results of the like in the DB, if there was a match, then display the matched component. 
        if(matchCheck) {
            setIsMatch(true);
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

    return (
        <div className="main-display">
            {isMatch?null:<Header/>}
            {isMatch?<Matched idx={idx} setIsMatch={setIsMatch} forward={forward}/>:mainDisplay}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{getProfiles})(Swipe);
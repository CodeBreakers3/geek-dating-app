//non component imports
import {useEffect, useState} from 'react';
import React from 'react'
import './profilesmall.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//component imports

//ProfileSmall component

// Add useEffect thats watching user variable on the userReducer
function ProfileSmall(props) {
    const {idx}=props
    // const {user} = props.userReducer
    const {viewableProfiles}=props.profileReducer;
    console.log(viewableProfiles)
    console.log(idx)
    let profile = viewableProfiles[idx];
    let profile_id = profile.profile_id;

    // useEffect(() => {
    //     if(user.hasOwnProperty("user_id")){

    //     }
    // }, [user])


    const imageDisplaySwipe = 
        <Link to={`/largeprofile/${profile_id}`}>
            <img id='swipe-picture' alt="displayed" src={viewableProfiles[idx].photo_one}/>
        </Link>;

    const imageDisplayMatched = 
        <img alt="displayed" src={viewableProfiles[idx].photo_one}/>;

    return (
        <div className="small-profile-container">
            <div></div>
            <div className="small-profile-image-flex-container">
                
                <div className="small-profile-image-container">
                    {props.matched?imageDisplayMatched:imageDisplaySwipe}
                </div>
                
                <div className="small-profile-details-container">
                    <div className="small-profile-name-container">
                        <h1>{viewableProfiles[idx].first_name}</h1>
                    </div>
                    <div className="small-profile-gamertag-container">
                        <p>{viewableProfiles[idx].gamer_tag}</p>
                    </div>
                    <div className="small-profile-description-container">
                        <p>{viewableProfiles[idx].about_me}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(ProfileSmall);
//non-component imports
import React, {useState,useEffect} from 'react';
import './profilelarge.css';
import {connect} from 'react-redux';
//component imports
import BackButton from './../BackButton';
import axios from 'axios';

//ProfileLarge component
function ProfileLarge(props) {

const [viewableProfile,setViewableProfile]=useState({})
const {profile_id}=props.match.params
useEffect(()=>{
    if(viewableProfile){    
        axios.get(`/api/getprofile/${profile_id}`).then(res=>{
            const[profile]=res.data
        setViewableProfile(profile)
    }).catch(err =>console.log(err))
}
},[props.match.params])
console.log(viewableProfile)
    return (
        <div className="large-profile">
            
        <BackButton />
            {/* First large profile section - an image and the name/gamertag/pronouns/primary interest/location. */}
            <div className="large-profile-details">

                <div className="large-profile-details-image">
                    <img alt="main-profile" src={viewableProfile.photo_one}/>
                </div>

                <div className="large-profile-details-text">
                    <div className="large-profile-details-text-sub">
                        <p>{viewableProfile.first_name}</p>
                    </div>

                    <div className="large-profile-details-text-sub">
                        <p>{viewableProfile.gamer_tag}</p>
                    </div>

                    <div className="large-profile-details-text-sub">
                        <p>{viewableProfile.sex}</p>
                    </div>

                    <div className="large-profile-details-text-sub">
                        <p>{viewableProfile.sexual_orientation}</p>
                    </div>

                    <div className="large-profile-details-location">
                        
                        <div className="large-profile-details-location-icon">
                            <img alt="location" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/location.svg"/>
                        </div>

                        <div className="large-profile-details-location-text">
                            <p>{viewableProfile.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second large profile section - an image and the full "about" description text. */}
            <div className="large-profile-details">
                <div className="large-profile-details-image">
                    <img alt="second" src={viewableProfile.photo_two}/>
                </div>

                <div className="large-profile-details-text">
                    <div className="large-profile-details-text-sub">
                        <p>{viewableProfile.about_me}</p>
                    </div>
                </div>
            </div>

            {/* Third large profile section - an image and all the non-core profile details - IF THEY ARE PROVIDED */}
            <div className="large-profile-details">
                <div className="large-profile-details-image">
                    <img alt="third" src={viewableProfile.photo_three}/>
                </div>

                <div className="large-profile-details-text">
                    <div className="large-profile-details-text-sub">
                        <p>Religion: {viewableProfile.height}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Preferred Pronoun: {viewableProfile.preferred_pronoun}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Occupation: {viewableProfile.favorite_food}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Fitness: {viewableProfile.activity_level}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Alcohol: {viewableProfile.alcohol}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Smoking: {viewableProfile.smoking}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Cannabis: {viewableProfile.cannabis}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Other Drugs: {viewableProfile.recreational_drugs}</p>
                    </div>
                </div>
            </div>

            {/* Fourth large profile section - an image and alcohol, smoking, weed, drugs, and kids */}
            <div className="large-profile-details">
                <div className="large-profile-details-image">
                    <img alt="fourth" src={viewableProfile.photo_four}/>
                </div>

                <div className="large-profile-details-text">
                    <div className="large-profile-details-text-sub">
                        <p>Kids: {viewableProfile.kids}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Religion: {viewableProfile.religion}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Education: {viewableProfile.education}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Occupation: {viewableProfile.occupation}</p>
                    </div>
                    <div className="large-profile-details-text-sub">
                        <p>Current Game: {viewableProfile.current_game}</p>
                    </div>
                </div>
            </div>

            {/* Fifth large profile section - an image and Interests */}
            <div className="large-profile-details">
                <div className="large-profile-details-image">
                    <img alt="fifth" src={viewableProfile.photo_five}/>
                </div>

                <div className="large-profile-details-text">
                    <div className="large-profile-details-text-sub">
                        <p>Interests:
                        <ul>
                            <li>Interest 1</li>
                            <li>Interest 2</li>
                            <li>Interest 3</li>
                        </ul></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = reduxState => {
    return reduxState
  }
  export default connect(mapStateToProps)(ProfileLarge)

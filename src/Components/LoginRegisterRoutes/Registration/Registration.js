import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import CoreInfo from './CoreInfo';
import Credentials from './Credentials';
import ProfPic from './ProfPic';
// import Interests from './Interests';
// import SubInterests from './SubInterests';
import Welcome from './Welcome';

const Registration = () => {
    let [indexTracker, setIndexTracker] = useState(1);
    let [newUser, setNewUser] = useState({
        email: "",
        password: ""
    });
    let [newProfile, setNewProfile] = useState({
        first_name : "",
        last_name: "",
        gamer_tag : "",
        location : "",
        about_me : "",
        sexual_orientation : "",
        sex : "",
        preferred_pronoun : "", 
        height : "", 
        activity_level : "", 
        religion : "", 
        education : "", 
        occupation : "", 
        kids : "", 
        alcohol : "", 
        smoking : "", 
        cannabis : "", 
        recreational_drugs : "", 
        favorite_food : "", 
        current_game : "", 
        photo_one : "", 
        photo_two : "", 
        photo_three : "", 
        photo_four : "", 
        photo_five : "", 
        user_id : ""
    });



    return (
        <div className='registration-components-container-wrapper'>
            {indexTracker === 1?
                <CoreInfo
                    actualProfile={newProfile} 
                    setNewProfile={setNewProfile} 
                    setIndexTracker={setIndexTracker}
                    indexTracker={indexTracker}>  
                </CoreInfo>:
                    indexTracker === 2?
                        <ProfPic 
                            actualProfile={newProfile} 
                            setNewProfile={setNewProfile} 
                            setIndexTracker={setIndexTracker}
                            indexTracker={indexTracker}>
                        </ProfPic>:
                            indexTracker === 3?
                                <Credentials
                                    actualUser={newUser} 
                                    setNewUser={setNewUser}
                                    actualProfile={newProfile} 
                                    setNewProfile={setNewProfile} 
                                    setIndexTracker={setIndexTracker}
                                    indexTracker={indexTracker}>
                                </Credentials>:
                                    indexTracker === 4?
                                        <Welcome  
                                            actualProfile={newProfile} 
                                            setNewProfile={setNewProfile} 
                                            setIndexTracker={setIndexTracker}
                                            indexTracker={indexTracker}>
                                        </Welcome>:
                                            <div>"There is an error loading the page"</div>}
        </div>

    )
}




export default Registration
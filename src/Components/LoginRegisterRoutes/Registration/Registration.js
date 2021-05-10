import React from 'react';
import { useState } from 'react';
import CoreInfo from './CoreInfo';
import Credentials from './Credentials';
import Interests from './Interests';
import ProfPic from './ProfPic';
import SubInterests from './SubInterests';
import Welcome from './Welcome';

const Registration = () => {
    let [indexTracker, setIndexTracker] = useState(1)
    let [newProfile, setNewProfile] = useState({})



    
    console.log(indexTracker)






    return (
        <div className='registration-components-container-wrapper'>
            {indexTracker === 1?<Credentials actualProfile={newProfile} setNewProfile={setNewProfile} setIndexTracker={setIndexTracker}></Credentials>:
            indexTracker === 2?<CoreInfo actualProfile={newProfile} setNewProfile={setNewProfile} setIndexTracker={setIndexTracker}></CoreInfo>:
            indexTracker === 3?<ProfPic actualProfile={newProfile} setNewProfile={setNewProfile} setIndexTracker={setIndexTracker}></ProfPic>:
            indexTracker === 4?<Welcome actualProfile={newProfile} setNewProfile={setNewProfile} setIndexTracker={setIndexTracker}></Welcome>: <div>"There is an error loading the page"</div>}
        </div>

    )
}




export default Registration
import "./CSS/ProfPic.css"
import React, {useState} from 'react'
import BackButton2 from '../BackButton2'

//ProfPic component
function ProfPic(props) {
    const [profilePic1, setprofilePic1] = useState(props.actualProfile.photo_one)
    const [profilePic2, setprofilePic2] = useState(props.actualProfile.photo_two)
    const [profilePic3, setprofilePic3] = useState(props.actualProfile.photo_three)
    const [profilePic4, setprofilePic4] = useState(props.actualProfile.photo_four)
    const [profilePic5, setprofilePic5] = useState(props.actualProfile.photo_five)
    
    const nextView = () => {
        //validate that they are providing at least the first image
        if(profilePic1==="") {
            alert("You must provide atleast the first image url.");
            return;
        }

        //save the details of this view to the tracked profile in the parent registration component
        props.setNewProfile({
            ...props.actualProfile,
           photo_one: profilePic1,
           photo_two: profilePic2,
           photo_three: profilePic3,
           photo_four: profilePic4,
           photo_five: profilePic5
        }) 
        //update the index in the parent registration component so that the next view is shown
        props.setIndexTracker(3)
        }


        // Need to implement onChange for pictures w/S3 integration
    return (
        <div className="profpic-view-wrapper-container">
            <BackButton2 setIndexTracker={props.setIndexTracker} indexTracker={props.indexTracker}/>

            <div className="profpic-view-title">
                <h1>Profile Pictures</h1>
            </div>

            <div className="profpic-view-picture-container-main">
                <p>Main Profile Pic:</p>
                <div className="profpic-view-image-container">
                    {!profilePic1?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic1} alt="user-picture-1"/>}
                </div>
                <p>Image URL:</p>
                <input type="text" defaultValue={props.actualProfile.photo_one} onChange={(e) => setprofilePic1(e.target.value)}></input>
                
            </div>

            <div className="profpic-view-picture-container-sub">
                <p>Additional Pics:</p>
                <div className="profpic-view-picture-container-sub-flex">
                    <div className="profpic-view-picture-input-container">
                        <div className="profpic-view-image-container">
                            {!profilePic2?
                                <img src="https://via.placeholder.com/150" alt="placeholder"/>:
                                <img src={profilePic2} alt="user-picture-1"/>}
                        </div>
                        <p>Image URL:</p>
                        <input type="text" defaultValue={props.actualProfile.photo_two} onChange={(e) => setprofilePic2(e.target.value)}></input>
                    </div>

                    <div className="profpic-view-picture-input-container">
                        <div className="profpic-view-image-container">
                            {!profilePic3?
                                <img src="https://via.placeholder.com/150" alt="placeholder"/>:
                                <img src={profilePic3} alt="user-picture-1"/>}
                        </div>
                        <p>Image URL:</p>
                        <input type="text" defaultValue={props.actualProfile.photo_three} onChange={(e) => setprofilePic3(e.target.value)}></input>
                    </div>

                    <div className="profpic-view-picture-input-container">
                        <div className="profpic-view-image-container">
                            {!profilePic4?
                                <img src="https://via.placeholder.com/150" alt="placeholder"/>:
                                <img src={profilePic4} alt="user-picture-1"/>}
                        </div>
                        <p>Image URL:</p>
                        <input type="text" defaultValue={props.actualProfile.photo_four} onChange={(e) => setprofilePic4(e.target.value)}></input>
                    </div>

                    <div className="profpic-view-picture-input-container">
                        <div className="profpic-view-image-container">
                            {!profilePic5?
                                <img src="https://via.placeholder.com/150" alt="placeholder"/>:
                                <img src={profilePic5} alt="user-picture-1"/>}
                        </div>
                        <p>Image URL:</p>
                        <input type="text" defaultValue={props.actualProfile.photo_five} onChange={(e) => setprofilePic5(e.target.value)}></input>
                    </div>
                </div>
            </div>

            <div className="profpic-view-save-button">
                <div onClick={() => nextView()}>Save and Continue</div>
            </div>
                
        </div>
    )
}

export default ProfPic;
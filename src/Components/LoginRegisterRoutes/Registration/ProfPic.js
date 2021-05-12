import React, {useState} from 'react'

//ProfPic component
function ProfPic(props) {
    const [profilePic1, setprofilePic1] = useState("")
    const [profilePic2, setprofilePic2] = useState("")
    const [profilePic3, setprofilePic3] = useState("")
    const [profilePic4, setprofilePic4] = useState("")
    const [profilePic5, setprofilePic5] = useState("")
    
    const nextView = () => {
        props.setNewProfile({
            ...props.actualProfile,
           photo_one: profilePic1,
           photo_two: profilePic2,
           photo_three: profilePic3,
           photo_four: profilePic4,
           photo_five: profilePic5
        }) 
        props.setIndexTracker(3)
        }


        // Need to implement onChange for pictures w/S3 integration
    return (
        <div className="profpic-view-wrapper-container">
            <div>
                <p>Upload some photos!</p>
            </div>
        <div className="profpic-view-picture-container-main">

            {!profilePic1?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic1} alt="user-picture-1"/>}
            <input type="text" onChange={(e) => setprofilePic1(e.target.value)}></input>
            {!profilePic2?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic2} alt="user-picture-1"/>}
            <input type="text" onChange={(e) => setprofilePic2(e.target.value)}></input>
            {!profilePic3?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic3} alt="user-picture-1"/>}
            <input type="text" onChange={(e) => setprofilePic3(e.target.value)}></input>
            {!profilePic4?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic4} alt="user-picture-1"/>}
            <input type="text" onChange={(e) => setprofilePic4(e.target.value)}></input>
            

            
        </div>

        <div className="profpic-view-picture-container-sub">

            {!profilePic5?<img src="https://via.placeholder.com/150" alt="placeholder"/>:<img src={profilePic5} alt="user-picture-1"/>}
            <input type="text" onChange={(e) => setprofilePic5(e.target.value)}></input>
        </div>

        <div className="profpic-view-save-button">
            <button onClick={() => nextView()}>Save and Continue</button>
        </div>
                
        </div>
    )
}

export default ProfPic;
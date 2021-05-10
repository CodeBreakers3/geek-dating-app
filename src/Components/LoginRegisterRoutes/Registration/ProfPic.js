import React, {useState} from 'react'

//ProfPic component
function ProfPic(props) {
    const [profilePic1, setprofilePic1] = useState("")
    const [profilePic2, setprofilePic2] = useState("")
    const [profilePic3, setprofilePic3] = useState("")
    const [profilePic4, setprofilePic4] = useState("")
    
    const nextView = () => {
        props.setNewProfile({
            ...props.actualProfile,
           profilePic1,
           profilePic2,
           profilePic3,
           profilePic4
        }) 
        props.setIndexTracker(3)
        }


    return (
        <div>
            <div>
                <p>Upload some photos!</p>
            </div>

        <div>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" alt="placeholder"/></a>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" alt="placeholder"/></a>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" alt="placeholder"/></a>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" alt="placeholder"/></a>
        </div>

        <div>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" alt="placeholder"/></a>
        </div>

        <div>
            <button onClick={() => nextView()}>Save and Continue</button>
        </div>
                
        </div>
    )
}

export default ProfPic;
//CoreInfo component
import React, {useState} from 'react'
import {connect} from 'react-redux'
import BackButton from './../../inAppRoutes/BackButton'
import './CSS/CoreInfo.css'

const CoreInfo = (props) => {
    const [firstName, setFirstName] = useState(props.actualProfile.first_name)
    const [lastName, setLastName] = useState(props.actualProfile.last_name)
    const [gamertag, setGamertag] = useState(props.actualProfile.gamer_tag)
    //corresponds to preferred_pronoun in the db
    const [preferredPronoun, setPreferredPronoun] = useState(props.actualProfile.preferred_pronoun)
    //corresponds to sex in the db
    const[gender, setGender] = useState(props.actualProfile.sex)
    //corresponds to sexual_orientation in the DB
    const [orientation, setOrientation] = useState(props.actualProfile.sexual_orientation)

    const nextView = () => {
        //check for data in the first/last/gamertag inputs.
        if (firstName==="" || lastName==="") {
            alert("You must provide your first name, last name, preferred pronoun, gender identity, and gender identity.");
            return;
        }
        //save the details of this view to the tracked profile in the parent registration component
        props.setNewProfile({
            ...props.actualProfile,
            first_name : firstName,
            last_name: lastName,
            gamer_tag: gamertag,
            preferred_pronoun: preferredPronoun,
            sex: gender,
            sexual_orientation: orientation 
        }) 
        //update the index in the parent registration component so that the next view is shown
        props.setIndexTracker(2)
    }

    return (
        <div className="info-view-wrapper-container">
            <BackButton/>

                <div className="info-titles">
                    <h1>What is your name?</h1>
                </div>

                <div className="info-view-main-container">
                    <div className="info-view-name-plate-container">
                        <p>*First Name:</p>
                        <p>*Last Name:</p>
                        <p>Gamertag:</p>
                    </div>

                    <div className="info-view-name-input-container">
                        <input placeholder="First Name" type="text" defaultValue={props.actualProfile.first_name} onChange={(e) => setFirstName(e.target.value)}></input>
                        <input placeholder="Last Name" type="text" defaultValue={props.actualProfile.last_name} onChange={(e) => setLastName(e.target.value)}></input>
                        <input placeholder="Gamertag" type="text" defaultValue={props.actualProfile.gamer_tag} onChange={(e) => setGamertag(e.target.value)}></input>
                    </div>

                </div>

                <div className="info-titles">
                    <h1>What is your preferred pronoun?</h1>
                </div>

                <div className="info-view-main-container">
                    <select defaultValue={(props.actualProfile.preferred_pronoun==="")?"he/him":props.actualProfile.preferred_pronoun} onChange={(e) => setPreferredPronoun(e.target.value)}>
                        <option value="he/him">He/Him</option>
                        <option value="she/her">She/Her</option>
                        <option value="they/them">They/Them</option>
                    </select>    
                </div>

                <div className="info-titles">
                    <h1>What is your gender identity?</h1>
                </div>

                <div className="info-view-main-container">
                    <select defaultValue={(props.actualProfile.sex==="")?"male":props.actualProfile.sex} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non Binary</option>
                    </select>
                </div>

                <div className="info-titles">
                    <h1>How do you identify?</h1>
                </div>
                
                <div className="info-view-main-container">
                    <select id="orientation-select" size="6" defaultValue={(props.actualProfile.sexual_orientation==="")?"straight":props.actualProfile.sexual_orientation} onChange={(e) => setOrientation(e.target.value)}>
                        <option value="straight">Straight</option>
                        <option value="gay">Gay</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="pansexual">Pansexual</option>
                        <option value="asexual">Asexual</option>
                        <option value="androsexual">Androsexual</option>
                        <option value="gynesexual">Gynesexual</option>
                        <option value="demisexual">Demisexual</option>
                        <option value="polyamorous">Polyamorous</option>
                        <option value="skoliosexual">Skoliosexual</option>
                    </select>
                </div>

            <div className="info-view-save-button">
                <div onClick={() => nextView()}>Save and Continue</div>
            </div>
            <p>* indicates a required field</p>

        </div>
        
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect (mapStateToProps)(CoreInfo);

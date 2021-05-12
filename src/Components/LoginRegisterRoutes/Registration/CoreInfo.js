//CoreInfo component
import React, {useState} from 'react'
import {connect} from 'react-redux'
import './CSS/CoreInfo.css'
import './CSS/Select.css'
import Select from 'react-select'

const CoreInfo = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gamertag, setGamertag] = useState("")
    const [age, setAge] = useState("")
    const[gender, setGender] = useState("")
    // const [sex, setSex] = useState("")
    const [orientation, setOrientation] = useState("")

//    Create a ternary for age
//    Location?    
// Create new get endpoint to check for unique username
// age and gender are assigned to other key values
    const nextView = () => {
        props.setNewProfile({
            ...props.actualProfile,
            first_name : firstName,
            last_name: lastName,
            gamer_tag: gamertag,
            preferred_pronoun: age,
            sex: gender,
            sexual_orientation: orientation 
        }) 
        props.setIndexTracker(2)
    
        }

        // const styles = {
        //     fontSize: 14,
        //     color: 'blue',
        //     width: '20px'
        // }
        // const options = [
        //     { value: age, label: 'Chocolate' },
        //     { value: age, label:'Strawberry' },
        //     { value: age, label:'Vanilla' }
        // ]
          
    

    return (
        <div className="info-view-wrapper-container">
            <div className="info-titles">
                <p>What is your name?</p>
            </div>

            <div className="info-view-main-name-container">
                <div className="info-view-name-plate-container">
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Gamertag:</p>
                </div>

                <div className="info-view-name-input-container">
                    <input placeholder="First Name" type="text" onChange={(e) => setFirstName(e.target.value)}></input>
                    <input placeholder="Last Name" type="text" onChange={(e) => setLastName(e.target.value)}></input>
                    <input placeholder="Gamertag" type="text" onChange={(e) => setGamertag(e.target.value)}></input>
                </div>

            </div>

            <div className="info-titles">
                <p>What is your age group?</p>
                <p className="sub-text">*Must be over 18 to create a OneUp profile*</p>
            </div>

            <div className="info-view-age-container">
            <select className="custom-select" onChange={(e) => setAge(e.target.value)}>
                    <option>Select Option:</option>
                    <option>18-25</option>
                    <option>26-35</option>
                    <option>36-45</option>
                    <option>46-59</option>
                    <option>60-74</option>
                    <option>75+</option>
                </select>
                    
            </div>

            <div className="info-titles">
                <p>What is your gender identity?</p>
            </div>

            <div className="info-view-gender-container">
                <select onChange={(e) => setGender(e.target.value)}>
                    
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non Binary</option>
                </select>
            </div>

            {/* <div className="info-titles">
                <p>What is your biological sex?</p>
            </div>

            <div className="info-view-sex-container">
                <select onChange={(e) => setSex(e.target.value)}>
                    <option >Male</option>
                    <option>Female</option>
                </select>
            </div> */}

            <div className="info-titles">
                <p>How do you identify?</p>
            </div>
            
            <div className="info-view-orientation-container">
                <select onChange={(e) => setOrientation(e.target.value)}>
                    <option>Select Orientation</option>
                    <option>Straight</option>
                    <option>Gay/</option>
                    <option>Bisexual</option>
                    <option>Pansexual</option>
                    <option>Asexual</option>
                    <option>Androsexual</option>
                    <option>Gynesexual</option>
                    <option>Demisexual</option>
                    <option>Polyamorous</option>
                    <option>Skoliosexual</option>
                </select>
            </div>

            <div className="info-view-save-button">
                <button onClick={() => nextView()}>Save and Continue</button>
            </div>

        </div>
        
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect (mapStateToProps)(CoreInfo);

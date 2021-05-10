//CoreInfo component
import React, {useState} from 'react'
import {connect} from 'react-redux'

const CoreInfo = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gamertag, setGamertag] = useState("")
    const [age, setAge] = useState("")
    const[gender, setGender] = useState("")
    const [sex, setSex] = useState("")
    const [orientation, setOrientation] = useState("")

//    Create a ternary for age
//    Location?    

    const nextView = () => {
        props.setNewProfile({
            ...props.actualProfile,
            firstName,
            lastName,
            gamertag,
            age,
            gender,
            sex,
            orientation 
        }) 
        props.setIndexTracker(3)
    
        }
    



    return (
        <div>
            <div>
                <p>What is your name?</p>
            </div>

            <div>
                <p>First Name:</p>
                <p>Last Name:</p>
                <p>Gamertag:</p>
            </div>

            <div>
                <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                <input placeholder="Gamertag" onChange={(e) => setGamertag(e.target.value)}></input>
            </div>

            <div>
                <p>When is your birthday?</p>
                <input placeholder="MM/DD/YYYY" onChange={(e) => setAge(e.target.value)}></input>
            </div>


            <div>
                <p>What is your gender identity?</p>

                <select onChange={(e) => setGender(e.target.value)}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non Binary</option>
                </select>
            </div>

            <div>
                <p>What is your biological sex?</p>
                <select onChange={(e) => setSex(e.target.value)}>
                    <option >Male</option>
                    <option>Female</option>
                </select>
            </div>
            
            <div>
                <p>How do you identify?</p>
                <select onChange={(e) => setOrientation(e.target.value)}>
                    <option>Straight</option>
                    <option>Gay</option>
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

            <div>
                <button onClick={() => nextView()}>Save and Continue</button>
            </div>

        </div>
        
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect (mapStateToProps)(CoreInfo);

import React, {useState} from 'react'
import {registerUser} from '../../../ducks/userReducer'
import {connect} from 'react-redux'
import BackButton2 from '../BackButton2'

//Credentials component
const Credentials = (props) => {
    const [email, setEmail] = useState(props.actualUser.email)
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    

    const nextView = () => {
        //check to make sure they have filled out all forms
        if (email=== "" || password === "" || password2 === "") {
            alert("You must fill out all form fields.");
            return;
        }

        //check to make sure that the password and confirm password are correct
        if(password === password2) {
            let newUser = {
                email: email,
                password: password
            }
            ///THIS IS WHERE OUR CURRENT PROBLEM SITS - THE PARENT COMPONENT STATE IS NOT UPDATING BEFORE WE MAKE THE CALL THE THE API
            props.setNewUser(newUser);
        } else {
                alert("Passwords do NOT match!")
                return;
        }
        console.log("Email: " + email);
        console.log(props.actualUser);

        //send all the gathered data to the db. This function will return a success or fail message to tell us what to do on this component. 
        let status = props.createNewUser();

        if (status) {
            //move to the next view    
            props.setIndexTracker(4);
        } else {
            alert("Email already exists. If you already have an account please log in.");
        }
    }







    return (
        <div className="credentials-view-wrapper-container">
            <BackButton2 setIndexTracker={props.setIndexTracker} indexTracker={props.indexTracker}/>
            <div className="credentials-view-email-container">
                <div>Email:</div>
                <input placeholder="Email" type="email" defaultValue={props.actualUser.email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="credentials-view-password-container">
                <div>Password:</div>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <div className="credentials-view-confirm-password-container">
                <div>Confirm Password:</div>
                <input placeholder="Password" type="password" onChange={(e) => setPassword2(e.target.value)}></input>
            </div>
        
            <div className="credentials-view-save-button">
                <button onClick={() => nextView()}>Save and Continue</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect (mapStateToProps,{registerUser})(Credentials);

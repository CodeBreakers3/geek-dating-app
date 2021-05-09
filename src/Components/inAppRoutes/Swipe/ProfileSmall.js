//non component imports
import './profilesmall.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//component imports

//ProfileSmall component
function ProfileSmall(props) {
    console.log(props)
const {idx}=props
const {profiles}=props.profileReducer
let profile = profiles[idx]
const {profile_id}=profile
console.log(profiles)



    const imageDisplaySwipe = 
        <Link to={`/largeprofile/${profile_id}`}>
            <img id='swipe-picture' alt="displayed" src={profile.photo_one}/>
        </Link>;

    const imageDisplayMatched = 
        <img alt="displayed" src={profile.photo_one}/>;

    return (
        <div className="small-profile-container">
            <div></div>
            <div className="small-profile-image-flex-container">
                
                <div className="small-profile-image-container">
                    {props.matched?imageDisplayMatched:imageDisplaySwipe}
                </div>
                
                <div className="small-profile-details-container">
                    <div className="small-profile-name-container">
                        <h1>{profile.first_name}</h1>
                    </div>
                    <div className="small-profile-gamertag-container">
                        <p>{profile.gamer_tag}</p>
                    </div>
                    <div className="small-profile-description-container">
                        <p>{profile.about_me}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(ProfileSmall);
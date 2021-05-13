//non component imports
import './profilesmall.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//component imports

//ProfileSmall component

// Add useEffect thats watching user variable on the userReducer
function ProfileSmall(props) {

    const imageDisplaySwipe = 
        <Link to={`/largeprofile/${props.profileReducer.viewableProfiles[props.idx]?.profile_id}`}>
            <img id='swipe-picture' alt="displayed" src={props.profileReducer.viewableProfiles[props.idx]?.photo_one}/>
        </Link>;

    const imageDisplayMatched = 
        <img alt="displayed" src={props.profileReducer.viewableProfiles[props.idx]?.photo_one}/>;

    return (
        <div className="small-profile-container">
            <div></div>
            <div className="small-profile-image-flex-container">
                
                <div className="small-profile-image-container">
                    {(props.matched==="match")?imageDisplayMatched:imageDisplaySwipe}
                </div>
                
                <div className="small-profile-details-container">
                    <div className="small-profile-name-container">
                        <h1>{props.profileReducer.viewableProfiles[props.idx]?.first_name}</h1>
                    </div>
                    <div className="small-profile-gamertag-container">
                        <p>{props.profileReducer.viewableProfiles[props.idx]?.gamer_tag}</p>
                    </div>
                    <div className="small-profile-description-container">
                        <p>{props.profileReducer.viewableProfiles[props.idx]?.about_me}</p>
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
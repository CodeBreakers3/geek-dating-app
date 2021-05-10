//non component imports
import React from 'react'
import './myprofile.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from './../../../ducks/userReducer';

//component imports
import AchievementBar from './AchievementBar';
import Header from './../../Header';

//MyProfile component
const MyProfile=(props)=> {

    console.log(props)
    const {user}=props.userReducer
    const logout = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        localStorage.setItem('loggedInUser', JSON.stringify({}));
        props.logoutUser();
        props.history.push('/');
    }

    return (
        <div className="main-display">
        <Header/>
            <div className="my-profile-container">
                <div className="my-profile-achievement-bar-flex-container">
                    <AchievementBar/>
                </div>

                <div className="my-profile-image-flex-container">
                    <div className="my-profile-image-container">
                        <img alt="my profile" src={user.photo_one}/>
                    </div>
                </div>

                <div className="my-profile-details-flex-container">
                    <div className="my-profile-details-container">
                        <div className="my-profile-details-name-container"><h1>{user.first_name} {user.last_name}</h1></div>
                        <div className="my-profile-details-gamertag-container">{`gamer tag: ${user.gamer_tag}`}</div>
                    </div>
                </div>

                <div className="my-profile-buttons-flex-container">
                    
                        <div className="my-profile-button" id="my-profile-filter-settings">
                            <Link to="/editfilters">
                                <img alt="filter settings" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/settings2.svg"/>
                            </Link>
                        </div>
                    
                    <div className="my-profile-button" id="my-profile-logout" onClick={logout}>Logout</div>
                    
                    <div className="my-profile-button" id="my-profile-profile-settings">
                        <Link to="/editprofile">
                            <img alt="profile settings" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/preferences2.svg"/>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps,{logoutUser})(MyProfile);
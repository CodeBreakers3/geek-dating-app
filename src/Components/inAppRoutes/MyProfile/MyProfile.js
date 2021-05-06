//non component imports
import './myprofile.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from './../../../ducks/userReducer';

//component imports
import AchievementBar from './AchievementBar';
import Header from './../../Header';

//MyProfile component
function MyProfile(props) {

    const logout = () => {
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
                        <img alt="my profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    </div>
                </div>

                <div className="my-profile-details-flex-container">
                    <div className="my-profile-details-container">
                        <div className="my-profile-details-name-container">Tanner Francis</div>
                        <div className="my-profile-details-gamertage-container">Gamertag: Financ3</div>
                    </div>
                </div>

                <div className="my-profile-buttons-flex-container">
                    <Link to="/editfilters">
                        <button className="my-profile-button">Settings</button>
                    </Link>
                    <button className="my-profile-button" onClick={logout}>Logout</button>
                    <Link to="/editprofile">
                        <button className="my-profile-button">Character Sheet</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{logoutUser})(MyProfile);
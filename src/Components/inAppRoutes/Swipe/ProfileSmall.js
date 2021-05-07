//non component imports
import './profilesmall.css';
import {Link} from 'react-router-dom';

//component imports

//ProfileSmall component
function ProfileSmall(props) {

    const imageDisplaySwipe = 
        <Link to="/largeprofile">
            <img alt="displayed" src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IXk-uNfO-8sAX-_RGXI&_nc_ht=scontent-hou1-1.xx&oh=b00d7bad776bf6f15b44e09fae98e964&oe=60B6D444"/>
        </Link>;

    const imageDisplayMatched = 
        <img alt="displayed" src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IXk-uNfO-8sAX-_RGXI&_nc_ht=scontent-hou1-1.xx&oh=b00d7bad776bf6f15b44e09fae98e964&oe=60B6D444"/>;

    return (
        <div className="small-profile-container">
            <div className="small-profile-image-flex-container">
                
                <div className="small-profile-image-container">
                    {props.matched?imageDisplayMatched:imageDisplaySwipe}
                </div>
                
                <div className="small-profile-details-container">
                    <div className="small-profile-name-container">
                        <h1>First Name, Last Name</h1>
                    </div>
                    <div className="small-profile-gamertag-container">
                        <p>Gamertag</p>
                    </div>
                    <div className="small-profile-description-container">
                        <p>This is a short description about the profile, after a certain number of characters it cuts off with an ellipsis, as...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSmall;
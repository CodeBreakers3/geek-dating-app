//non-component imports
import {Link} from 'react-router-dom';

//component imports

//Matched Component
function Matched(props) {
    return (
        <div className="matched-container">
            <div className="matched-details-container">
                <div className="matched-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IXk-uNfO-8sAX-_RGXI&_nc_ht=scontent-hou1-1.xx&oh=b00d7bad776bf6f15b44e09fae98e964&oe=60B6D444"/>
                </div>

                <div className="matched-details-text-container">
                    <div className="matched-details-text-name-container">
                        <p>First Name Last Name</p>
                    </div>

                    <div className="matched-details-text-gamertag-container">
                        <p>Gamertag</p>
                    </div>

                    <div className="matched-details-text-pronouns-container">
                        <p>pronoun/pronoun</p>
                    </div>

                    <div className="matched-details-text-primary-interest-container">
                        <p>Primary Interest: Interest</p>
                    </div>

                    <div className="matched-details-text-location-container">
                        
                        <div className="matched-details-text-location-icon-container">
                            ICON
                        </div>

                        <div className="matched-details-text-location-text-container">
                            <p>City, State</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="matched-buttons-container">
                <button onClick={() => props.setIsMatch(false)}>Back to Profiles</button>
                <Link to="/matches">
                    <button onClick={() => props.setIsMatch(false)}>View Matches</button>
                </Link>
            </div>
        </div>
    )
}

export default Matched;
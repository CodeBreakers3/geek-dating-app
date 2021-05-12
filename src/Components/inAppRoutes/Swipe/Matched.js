//non-component imports
import React from 'react'
import './matched.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfiles} from '../../../ducks/profileReducer';

//component imports
import ProfileSmall from './ProfileSmall';

//Matched Component
function Matched(props) {
    return (
        <div className="matched">
            <div className="matched-its-a-match">
                <p>It's a Match!</p>
            </div>
            <ProfileSmall matched={true} idx={props.idx}/>
            <div className="matched-buttons-container">
                <div className="matched-buttons" onClick={() => {
                    props.getProfiles(props.userReducer.user.profile_id);
                    //check to see if the viewable profiles have run out. If so display the empty message to the user
                    if (props.profileReducer.viewableProfiles.length===1) {
                            props.setIsMatch("empty");
                        } else {
                            props.setIsMatch("main");
                        }
                }}>Back to Profiles</div>
                <Link to="/matches">
                    <div className="matched-buttons" onClick={() => {
                        props.getProfiles(props.userReducer.user.profile_id);
                        //check to see if the viewable profiles have run out. If so display the empty message to the user
                        if (props.profileReducer.viewableProfiles.length===1) {
                            props.setIsMatch("empty");
                        } else {
                            props.setIsMatch("main");
                        }
                    }}>View Matches</div>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{getProfiles})(Matched);
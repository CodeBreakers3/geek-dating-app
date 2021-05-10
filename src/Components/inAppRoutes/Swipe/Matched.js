//non-component imports
import React from 'react'
import './matched.css';
import {Link} from 'react-router-dom';

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
                    props.setIsMatch(false);
                    //move the displayed profiles forward by one index.
                    props.forward();
                }}>Back to Profiles</div>
                <Link to="/matches">
                    <div className="matched-buttons" onClick={() => {
                        props.setIsMatch(false);
                        //move the displayed profiles forward by one index.
                        props.forward();
                    }}>View Matches</div>
                </Link>
            </div>
        </div>
    )
}

export default Matched;
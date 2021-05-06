import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMatches } from "../../../ducks/profileReducer";
import './matches.css'

const Matches = (props) => {
  console.log(props);

  useEffect(() => {
    const { profile_id } = props.userReducer.user;
    props.getMatches(profile_id);
  }, []);

let mappedMatches = props.profileReducer.matches.map((match, i) => {
    return(
    <div key={i} id='matches' className='row'>
        <div className='row'>
            <img className='matches-profile-photo' src={match.photo1} alt='1'></img>
            <h6>{match.firstname1}</h6>
        <h3>{match.gamertag1}</h3>
        </div>

        <div className='row'>
        <h6>{match.gamertag2}</h6>
        <h6>{match.firstname2}</h6>
        <img className='matches-profile-photo' src={match.photo2} alt='2'></img>
        </div>
    </div>
  )
  })

return <div>

{mappedMatches}
  </div>;
};
const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps, { getMatches })(Matches);

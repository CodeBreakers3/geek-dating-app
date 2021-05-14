import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MappedMatches = (props) => {
  const { match } = props;
  const { profile1, profile2 } = match;
 
  
  return props.userReducer.user.profile_id === match.profile1 ? (
    <div className="mappedMatches">
      <Link to={`/largeprofile/${profile2}`}>
        <div className="matches-picture-div">
        <img id='mappedMatchesPicture' src={match.photo2} alt={"p"}></img>
        </div>
      </Link>
      <h3 >{match.gamertag2}</h3>
    </div>
  ) : (
    <div className='mappedMatches'>
      <Link to={`/largeprofile/${profile1}`}>
      <div className="matches-picture-div">
        <img className="mappedMatchesPicture" src={match.photo1} alt={"p"}></img>
     </div>
     </Link>
      <h3><strong></strong>{match.gamertag1}</h3>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps)(MappedMatches);

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MappedMatches = (props) => {
  const { match } = props;
  const { profile1, profile2 } = match;
 
  
  return props.userReducer.user.profile_id === match.profile1 ? (
    <div id="mappedMatches">
      <Link to={`/largeprofile/${profile2}`}>
        <img className="matches-picture" src={match.photo2} alt={"p"}></img>
      </Link>
      <h6>{match.gamertag2}</h6>
    </div>
  ) : (
    <div>
      <Link to={`/largeprofile/${profile1}`}>
        <img className="matches-picture" src={match.photo1} alt={"p"}></img>
      </Link>
      <h6>{match.gamertag1}</h6>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps)(MappedMatches);

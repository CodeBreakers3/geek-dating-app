import React, { useEffect } from "react";
import axios from 'axios'
import { connect } from "react-redux";
import { getMatches,getMatchedChat } from "../../../ducks/profileReducer";
import "../../../reset.css";
import "./matches.css";

const Matches = (props) => {
  console.log(props);

  useEffect(() => {
    const { profile_id } = props.userReducer.user;
    props.getMatches(profile_id);

  }, []);

  let mappedPhotos = props.profileReducer.matches.map((match, i) => {

    return (

      (props.userReducer.user.profile_id === match.profile1 ? (
        <div key={i}>
        <img className="matches-picture" src={match.photo2} alt={"p"}></img>
      </div>
      ):(
      <div key={i}>
        <img className="matches-picture" src={match.photo1} alt={"p"}></img>
      </div>
      ))
      )
  });
  
  let mappedMatches = props.profileReducer.matches.map((match, i) => {
    const {match_id}= match
    let chat = axios.get(`/api/matchedchat/${match_id}`).then(res=>res.data)
    return (

      (props.userReducer.user.profile_id === match.profile1 ? (
 <div key={i} id="matches" className="row">
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo2}
            alt="1"
          ></img>
          <h6>{match.firstname2}</h6>
          <h3>{match.gamertag2}</h3>
        </div>
        <p>{}</p>
      </div>) : (<div key={i} id="matches" className="row">
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo1}
            alt="1"
          ></img>
          <h6>{match.firstname1}</h6>
          <h3>{match.gamertag1}</h3>
        </div>
      </div>) )
    );
  });

  return (
    <div id="matches-view">
      <div className="matches-picture-view">{mappedPhotos}</div>

      <div id="mapped-matches-container">{mappedMatches}</div>
    </div>
  );
};
const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps, { getMatches,getMatchedChat })(Matches);

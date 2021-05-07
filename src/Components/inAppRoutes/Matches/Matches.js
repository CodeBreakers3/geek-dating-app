import React, { useEffect } from "react";
import Header from '../../Header'
import MatchedChats from './MatchedChats'
import { connect } from "react-redux";
import { getMatches,getMatchedChat } from "../../../ducks/profileReducer";
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
    return (
        <MatchedChats key={i} match={match} />
    );
  });

  return (
    <div id="matches-view">
      <Header/>
      <div className="matches-picture-view">{mappedPhotos}</div>

      <div id="mapped-matches-container">{mappedMatches}</div>
    </div>
  );
};
const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps, { getMatches,getMatchedChat })(Matches);
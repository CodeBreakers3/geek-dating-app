import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from '../../Header'
import MatchedChats from './MatchedChats'
import MappedMatches from './MappedMatches'
import { getMatches,getMatchedChat } from "../../../ducks/profileReducer";
import "./matches.css";

const Matches = (props) => {
  const [allMatches,setAllMatches]= useState([])
  const {profile_id}= props.userReducer.user
  useEffect(() => {
    props.getMatches(profile_id);
    axios.get(`/api/allmatches/${profile_id}`)
    .then(res=>{
      setAllMatches(res.data)
    })
    .catch(err=>console.log(err))
  
  },[profile_id]);

  let mappedPhotos = allMatches.map((match, i) => {
    return (
     <MappedMatches key={i} match={match}/>
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
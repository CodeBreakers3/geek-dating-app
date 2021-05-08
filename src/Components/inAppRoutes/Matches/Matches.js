import React, { useEffect,useState } from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import axios from "axios";
import Header from '../../Header'
import MatchedChats from './MatchedChats'
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
    console.log(profile_id)
  },[]);



  let mappedPhotos = allMatches.map((match, i) => {
    return (
      (props.userReducer.user.profile_id === match.profile1 ? (
        <div key={i}>
          <Link to='/'></Link>
        <img className="matches-picture" src={match.photo2} alt={"p"}></img>
      <h6>{match.gamertag2}</h6>
      </div>
      ):(
      <div key={i}>
        <img className="matches-picture" src={match.photo1} alt={"p"}></img>
        <h6>{match.gamertag1}</h6>
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
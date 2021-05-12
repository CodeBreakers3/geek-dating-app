// import React, {useState, useEffect, useRef} from 'react'
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import io from 'socket.io-client';

const MappedMatchChat = (props) => {
    const{match_id}=props.match
    const { match } = props;
    const { profile1, profile2 } = match;
    // useEffect(()=>{
    //   decide()
    // })
  
    // const decide =()=>{
    //   if(profile1=== props.userReducer.user.profile_id){
    //     setProfile_id(profile1)
    //   }else{
    //     setProfile_id(profile2)
    //   }
    // }
    return props.userReducer.user.profile_id === match.profile1 ? (
      <div>
        <Link to={`/chats/${match_id}`}>
          <img className="matches-picture" src={match.photo2} alt={"p"}></img>
        </Link>
        <h6>{match.gamertag2}</h6>
      </div>
    ) : (
      <div>
        <Link to={`/chats/${match_id}`}>
          <img className="matches-picture" src={match.photo1} alt={"p"}></img>
        </Link>
        <h6>{match.gamertag1}</h6>
      </div>
    );
  };

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps)(MappedMatchChat);

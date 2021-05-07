import React, { useEffect,useState } from "react";
import axios from 'axios'
import {connect} from 'react-redux';
import "./matches.css";

const MatchedChats = (props) => {
    const [message,setMessage] = useState('')
  console.log(props);

const {match}=props
const {match_id}=match

  useEffect(() => {
axios.get(`/api/message/${match_id}`).then(res=>{
    setMessage(res.data[0].message)
}).catch(err=>console.log(err))
  }, []);

return (
    (props.userReducer.user.profile_id === match.profile1 ? (
 <div id="matches" className="row">
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo2}
            alt="1"
          ></img>
          <h1>{match.firstname2} {match.lastname2}</h1>
          <h6>{match.gamertag2}</h6>
          <p>{message}</p>
        </div>
      </div>) : (<div id="matches" className="row">
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo1}
            alt="1"
          ></img>
          <h6>{match.firstname1}</h6>
          <h3>{match.gamertag1}</h3>
           <p>{message}</p>
        </div>
      </div>) 
))
    }

const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps)(MatchedChats);

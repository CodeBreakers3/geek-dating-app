import React, { useEffect,useState } from "react";
import {Link }from 'react-router-dom'
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
  }, [match_id]);

return (
    (props.userReducer.user.profile_id === match.profile1 && message !== undefined ? (
 <div id="matches" className="row">
<Link to={`/chats/${match_id}`}>
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo2}
            alt="1"
          ></img>

          <h1>{match.gamertag2}</h1>
          <p>{message}</p>
        </div>
        </Link>
      </div>) : (
      <div id="matches" className="row">
        <Link to={`/chats/${match_id}`}>
        <div className="row">
          <img
            className="matches-profile-photo"
            src={match.photo1}
            alt="1"
          ></img>

          <h1>{match.gamertag1}</h1>
           <p>{message}</p>
        </div>
        </Link>
      </div>) 
))
    }

const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps)(MatchedChats);

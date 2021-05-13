import React, { useEffect,useState } from "react";
import {Link }from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux';
import "./matches.css";

const ExistingChats = (props) => {
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
 <div className="matches row">
<Link to={`/chats/${match_id}`}>
        <div className="wow">

          <img
            className="matches-profile-photo"
            src={match.photo2}
            alt="1"
          ></img>
          <div className='gamer'>
            <h1 id='gamertag'>{match.gamertag2}</h1>
            <p id='lastMessage'>{message}</p>
          </div>
        </div>
        </Link>
      </div>) : (
      <div className="matches row">
        <Link to={`/chats/${match_id}`}>
        <div className="wow">
          <img
            className="matches-profile-photo"
            src={match.photo1}
            alt="1"
          ></img>
<div className='gamer'>
          <h1 id='gamertag'>{match.gamertag1}</h1>
           <p id='lastMessage'>{message}</p>
        </div>
        </div>
        </Link>
      </div>) 
))
    }

const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps)(ExistingChats)
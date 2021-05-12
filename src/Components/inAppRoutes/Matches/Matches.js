import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import MappedMatchChat from './MappedMatchChat'
import axios from "axios";
import Header from '../../Header'
import MatchedChats from './MatchedChats'
import MappedMatches from './MappedMatches'
import { getMatches,getMatchedChat } from "../../../ducks/profileReducer";
import "./matches.css";

const Matches = (props) => {

  const [allMatches,setAllMatches]= useState([])
  const [toggle,setToggle]= useState(false)

  const {profile_id}= props.userReducer.user
const {getMatches} =props
  useEffect(() => {
    getMatches(profile_id);
    axios.get(`/api/allmatches/${profile_id}`)
    .then(res=>{
      setAllMatches(res.data)
    })
    .catch(err=>console.log(err))
  
  },[profile_id,getMatches]);

  const handleClick=()=>{
    setToggle(!toggle)
  }


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
  
  let mappedMatchChat = allMatches.map((match,i) =>{
    return(
      <MappedMatchChat match={match} key={i}/>
    )
  })

  return (
    <div id="matches-view">
      <Header/>
     {!toggle ?   (
     <div>    
      <div className="matches-picture-view">{mappedPhotos}</div>
      <div onClick={()=>handleClick()}className='startChat'>Start Chatting</div>
     <div id="mapped-matches-container">
        {mappedMatches}
        </div>
      </div>
        ):(
        <div id='chat-view'>
          <div id='chatSelection'>

              <div onClick={()=>handleClick()}id='toggle2'></div>
              <div>{mappedMatchChat}</div>
              
          </div>     
        </div>
        )
        }
    </div>
  );
};
const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { getMatches,getMatchedChat })(Matches);
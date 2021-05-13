import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import MappedMatchChat from './MappedMatchChat'
import axios from "axios";
import Header from '../../Header'
import ExistingChats from './ExistingChats'
import MappedMatches from './MappedMatches'
import { getMatches,getMatchedChat } from "../../../ducks/profileReducer";
import {useHistory} from 'react-router-dom'
import "./matches.css";

const Matches = (props) => {
  console.log(props)
  let history = useHistory()
  const [allMatches,setAllMatches]= useState([])
  const [toggle,setToggle]= useState(false)

  const {profile_id}= props.userReducer.user
const {getMatches} =props
const {isLoggedIn}=props.userReducer
useEffect(()=>{
 !isLoggedIn ?  history.push('/login'): console.log(profile_id)
})
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
        <ExistingChats key={i} match={match} />
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
      <h6>It's Dangerous To Go Alone!</h6>
      <div className="matches-picture-view">{mappedPhotos}</div>
     {!toggle ?   (
     <div id='match1'>    
     <h6>Rekindle A Spark...</h6>
     <div id="mapped-matches-container">
        {mappedMatches}
        </div> 
        <div onClick={()=>handleClick()} className='startChat'>Select Player 2</div>
      </div>
        ):(
        <div id='chat-view'>
        
          <div id='chatSelection'> 
          <div onClick={()=>handleClick()} id='toggle2'></div>
              <div id='mappedMatchChat'>{mappedMatchChat}</div>
              
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
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';

const MappedChats = (props)=> {
const {message} =props
const {user}=props.userReducer
const {profile_id}=props.message
const[toggle,setToggle]=useState(false)
const[messageInput,setMessageInput]=useState(message.message)

const handleClick=()=>{
axios.put(`/api/chat/${props.message.chat_id}`).then(res=>res.data)
}
    return(
        <div id='mappedChats'>
    {message.replying_profile_id === user.profile_id ? (
    <section className='userDiv'>
   <div onClick={()=>setToggle(!toggle)} className='open1'>x</div>
        <Link to={`/largeprofile/${profile_id}`}>
        <img id='userIcon'src={message.photo} alt={message.profile_id}></img>
        </Link>
        <p id='userName' className='name'>{user.first_name}</p>
        <p id='userMessage' className='message'>{message.message}</p>
    </section>
    ):(
    <section className='profileDiv'>
        <div onClick={()=>setToggle(!toggle)}className='open2'>x
        {/* {!toggle ? <input onChange={(e)=>setMessageInput(e.target.value)} type='text'></input>:<></>} */}
        </div>
          <Link to={`/largeprofile/${profile_id}`}>
        <img id='profileIcon'src={message.photo} alt={message.profile_id}></img>
        </Link>
  <p id='profileName'className='name'>{message.first_name}</p>
        <p id='profileMessage'className='message'>{message.message}</p>
    </section>
    )}
        </div>
        )
        }
    
    const mapStateToProps = reduxState => {
        return reduxState
      }
      export default connect(mapStateToProps)(MappedChats)
// import React, {useState, useEffect, useRef} from 'react'
import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import io from 'socket.io-client'; 

const MappedMatches = (props)=> {
const {match}=props
    return(
        (props.userReducer.user.profile_id === match.profile1 ? (
            <div>
              <Link to='/largeprofile'>
            <img className="matches-picture" src={match.photo2} alt={"p"}></img>
          <h6>{match.gamertag2}</h6>
          </Link>
          </div>
          ):(
          <div>
            <img className="matches-picture" src={match.photo1} alt={"p"}></img>
            <h6>{match.gamertag1}</h6>
          </div>
          ))
    )
}


const mapStateToProps = reduxState => {
    return reduxState
  }
  export default connect(mapStateToProps)(MappedMatches)
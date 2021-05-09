//non-component imports
import './swipe.css';
import React, {useEffect} from 'react'
import {useState} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
//component imports
import Matched from './Matched';
import ProfileSmall from './ProfileSmall';
import Header from './../../Header';
import {getProfiles} from '../../../ducks/profileReducer'

//Swipe component
function Swipe(props) {
    const [isMatch, setIsMatch] = useState(false);
const [idx,setIdx] = useState(0)
const {viewableProfiles}=props.userReducer.user
const {profile_id}=props.userReducer.user


useEffect(()=>{
    props.getProfiles(profile_id)
    console.log(props)
},[idx,profile_id])
    const back = ()=>{  
        console.log(idx) 
        let i = idx
        if(idx>0){
          i--
            setIdx(i)
            console.log(idx)
        }
        console.log(idx)
    }
    
    
    const forward = ()=>{
        console.log(idx)  
        let i = idx  
        if(idx < viewableProfiles.length-1){
    
           i++
            setIdx(i)
            console.log(idx)
        }
        console.log(idx)
        // axios.post(`/api/like/${profile_id_1}/liked/${profile_id_1}`).then(res=>console.log(res.data)).catch(err => console)
    }


    const mainDisplay =
                <div className="swipe-main-display-container">
                    <ProfileSmall idx={idx} matched={false}/>
                    <div className="swipe-main-display-buttons-container">
                        <div className="swipe-main-display-icon-container" >
                            <div className="swipe-main-display-icon">
                                <img onClick={()=>back()} alt="dislike-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/dislike2.svg"/>
                            </div>
                        </div>

                        <div className="swipe-main-display-icon-container">
                            <div className="swipe-main-display-icon">
                                <img onClick={()=>forward()} alt="like-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/like2.svg"/>
                            </div>
                        </div>
                    </div>
                </div>

    return (
        <div className="main-display">
            {isMatch?null:<Header/>}
            {isMatch?<Matched setIsMatch={setIsMatch}/>:mainDisplay}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{getProfiles})(Swipe);
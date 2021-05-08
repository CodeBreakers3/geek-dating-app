//non-component imports
import './swipe.css';
import {useState} from 'react';
import {connect} from 'react-redux'

//component imports
import Matched from './Matched';
import ProfileSmall from './ProfileSmall';
import Header from './../../Header';
import axios from 'axios';

//Swipe component
function Swipe(props) {
    const [isMatch, setIsMatch] = useState(false);
const [idx,setIdx] = useState(0)
const {viewableProfiles}=props.userReducer.user
const profile_id_1 = props.userReducer.user.profile_id
const profile_id_2 = props.userReducer.user.viewableProfiles[idx].profile_id


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
        axios.post(`/api/like/${profile_id_1}/liked/${profile_id_2}`).then(res=>console.log(res.data)).catch(err => console)
    }

    const likeProfile = () => {
        //THIS FUNCTION STILL TO BE BUILT - need data from redux
        alert(`You've liked someone!`);
    }

    const dislikeProfile = () => {
        //THIS FUNCTION STILL TO BE BUILT - need data from redux
        alert(`You've disliked someone.`);
    }

    const mainDisplay =
                <div className="swipe-main-display-container">
                    <ProfileSmall back={back} forward={forward} idx={idx} matched={false}/>
                    <div className="swipe-main-display-buttons-container">
                        <div className="swipe-main-display-icon-container" onClick={dislikeProfile}>
                            <div className="swipe-main-display-icon">
                                <img onClick={()=>back()} alt="dislike-icon" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/dislike2.svg"/>
                            </div>
                        </div>

                        <div className="swipe-main-display-icon-container" onClick={likeProfile}>
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
export default connect(mapStateToProps)(Swipe);
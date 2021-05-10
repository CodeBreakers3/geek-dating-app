//non component imports
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import f from 'session-file-store';
import BackButton from './../BackButton';
import AchievementBar from './AchievementBar';

//EditProfile component
const EditProfile=(props)=>{
    const{profile_id}=props.userReducer.user
const{user_id}=props.userReducer.user
    const{user}=props.userReducer
    const [about_me,setabout_me]=useState(user.about_me)
    const [gamer_tag,setgamer_tag]=useState(user.gamer_tag)
    const [religion,setreligion]=useState(user.religion)
    const [height,setheight]=useState(user.height)
    const [sex,setsex]=useState(user.sex)
    const [activity_level,setactivity_level]=useState(user.activity_level)
    const [education,seteducation]=useState(user.education)
    const [occupation,setoccupation]=useState(user.occupation)
    const [alcohol,setalcohol]=useState(user.alcohol)
    const [smoking,setsmoking]=useState(user.smoking)
    const [cannabis,setcannabis]=useState(user.cannabis)
    const [recreational_drugs,setrecreational_drugs]=useState(user.recreational_drugs)
    const [kids,setkids]=useState(user.kids)
    const [favorite_food,setfavorite_food]=useState(user.favorite_food)
    const [current_game,setcurrent_game]=useState(user.current_game)
    const [first_name,setfirst_name]=useState(user.first_name)
    const [last_name,setlast_name]=useState(user.last_name)
    const [sexual_orientation,setsexualorientation]=useState(user.sexual_orientation)
    const [preferred_pronoun,setpreferred_pronoun]=useState(user.preferred_pronoun)
    const [location,setlocation]=useState(user.location)
    const [photo_one,setphoto_one]=useState(user.photo_one)
    const [photo_two,setphoto_two]=useState(user.photo_two)
    const [photo_three,setphoto_three]=useState(user.photo_three)
    const [photo_four,setphoto_four]=useState(user.photo_four)
    const [photo_five,setphoto_five]=useState(user.photo_five)

    
    const handleClick=()=>{
        axios.put(`/api/updateprofile/${profile_id}`,{first_name, last_name, gamer_tag, location, about_me, sexual_orientation, sex,preferred_pronoun, height, activity_level, religion, education, occupation, kids, alcohol, smoking, cannabis, recreational_drugs, favorite_food, current_game, photo_one, photo_two, photo_three, photo_four, photo_five, user_id}).then(res =>console.log(res.data)).catch(err =>console.log(err))
    }
    
    console.log(props)
    return (
        <div className="edit-profile-container">
            <BackButton/>
            <div className="my-profile-achievement-bar-flex-container">
                <AchievementBar/>
            </div>

            <div className="edit-profile-edit-images-flex-container">
                <div className="edit-profile-edit-images-image-container">
                    <img alt='.' src={user.photo_one}/>
                    <input value={photo_one} onChange={(e)=>setphoto_one(e.target.value)} ></input>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt='.' src={user.photo_two}/>
                    <input value={photo_two} onChange={(e)=>setphoto_two(e.target.value)} ></input>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt='.' src={user.photo_three}/>
                    <input value={photo_three} onChange={(e)=>setphoto_three(e.target.value)} ></input>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt='.' src={user.photo_four}/>
                    <input value={photo_four} onChange={(e)=>setphoto_four(e.target.value)} ></input>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt='.' src={user.photo_five}/>
                    <input value={photo_five} onChange={(e)=>setphoto_five(e.target.value)} ></input>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>
            </div>

            <div className="edit-profile-edit-details-flex-container">

                <div className="edit-profile-edit-details-about-me-container">
                        <p>First Name:</p>
                        <input value={first_name} onChange={(e)=>setfirst_name(e.target.value)}></input>
                </div>
                <div className="edit-profile-edit-details-about-me-container">
                        <p>Last Name:</p>
                        <input value={last_name} onChange={(e)=>setlast_name(e.target.value)}></input>
                </div>         

                <div className="edit-profile-edit-details-gamer-tag-container">
                        <p>Gamer Tag:</p>
                        <input value={gamer_tag} onChange={(e)=>setgamer_tag(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-about-me-container">
                        <p>About Me:</p>
                        <input value={about_me} onChange={(e)=>setabout_me(e.target.value)}></input>
                </div>
                <div className="edit-profile-edit-details-about-me-container">
                        <p>Location:</p>
                        <input value={location} onChange={(e)=>setlocation(e.target.value)}></input>
                </div>

       

                <div className="edit-profile-edit-details-religion-container">
                        <p>Religion:</p>
                        <input value={religion} onChange={(e)=>setreligion(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-height-container">
                        <p>Height:</p>
                        <input value={height} onChange={(e)=>setheight(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-sex-container">
                        <p>Sex:</p>
                        <input value={sex} onChange={(e)=>setsex(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-activity-level-container">
                        <p>Activity Level:</p>
                        <input value={activity_level} onChange={(e)=>setactivity_level(e.target.value)}></input>
                    </div>


                <div className="edit-profile-edit-details-education-container">
                        <p>Education:</p>
                        <input value={education} onChange={(e)=>seteducation(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-work-container">
                        <p>Work:</p>
                        <input value={occupation} onChange={(e)=>setoccupation(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-sexual-orientation-container">
                        <p>Orientation:</p>
                        <input value={sexual_orientation} onChange={(e)=>setsexualorientation(e.target.value)}></input>
                </div>
                <div className="edit-profile-edit-details-sexual-orientation-container">
                        <p>Orientation:</p>
                        <input value={preferred_pronoun} onChange={(e)=>setpreferred_pronoun(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-alcohol-container">
                        <p>Alcohol:</p>
                        <input value={alcohol} onChange={(e)=>setalcohol(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-smoking-container">
                        <p>Smoking:</p>
                        <input value={smoking} onChange={(e)=>setsmoking(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-weed-container">
                        <p>Weed:</p>
                        <input value={cannabis} onChange={(e)=>setcannabis(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-drugs-container">
                        <p>Drugs:</p>
                        <input value={recreational_drugs} onChange={(e)=>setrecreational_drugs(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-kids-container">
                        <p>Kids:</p>
                        <input value={kids} onChange={(e)=>setkids(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-favorite-food-container">
                        <p>Favorite Food:</p>
                        <input value={favorite_food} onChange={(e)=>setfavorite_food(e.target.value)}></input>
                </div>

                <div className="edit-profile-edit-details-current-game-container">
                        <p>Current Game:</p>
                        <input value={current_game} onChange={(e)=>setcurrent_game(e.target.value)}></input>
                </div>
            </div>

            <div className="edit-profile-edit-details-save-button">
                <button onClick={()=>handleClick()}>Save Changes</button>
            </div>

        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(EditProfile);
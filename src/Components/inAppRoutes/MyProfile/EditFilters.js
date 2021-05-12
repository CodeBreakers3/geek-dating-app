//non component imports
import React from 'react'
import './editfilters.css';
import {connect} from 'react-redux';
import axios from 'axios';
import {useState} from 'react';
import {updateUser} from './../../../ducks/userReducer';

//component imports
import BackButton from './../BackButton';

//EditFilters Component
function EditFilters(props) {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmMatch, setConfirmMatch] = useState(true);
    const [badLogin, setBadLogin] = useState(false); 

    const toggleButton = ev => {
        //toggle the CSS for the button so it shows as "selected" or "unselected"
        if(ev.target.className==="edit-filters-topic-unselected") {
            ev.target.className = "edit-filters-topic-selected";
        } else if (ev.target.className==="edit-filters-topic-selected") {
            ev.target.className = "edit-filters-topic-unselected";
        }
    }

    const updateProfile = () => {
        //this still needs to be built out
        alert(`You've updated your profile.`);
    }

    const updateCredentials = async () => {
        //reset the error messages display
        setConfirmMatch(true);
        setBadLogin(false);
        //check that the newPassword matches the confirm password. If it doesn't then display the error message and return.
        if (confirmPassword!==newPassword) {
            setConfirmMatch(false);
            return;
        }

        //call the backend to update the user
        let updatedUser;
        try {
            let data = await axios.put(`/auth/updatecredentials/${props.userReducer.user.user_id}`, 
            {
                oldEmail: oldEmail,
                newEmail: newEmail,
                oldPassword: oldPassword,
                newPassword: newPassword
            });
            updatedUser = data.data;
        } catch (err) {
            console.log("Failed to update credentials - " + err);
            //if this is caught then it means the credentials were bad. Display the bad credentials message.
            setBadLogin(true);
            return;
        }
        //if successful, update the redux with the new user details (email has changed). 
        let newReduxUser = props.userReducer.user;
        newReduxUser.email = updatedUser.email;
        props.updateUser(newReduxUser);

        //update local storage with the new user as well
        localStorage.setItem('loggedInUser', JSON.stringify(newReduxUser));

        //alert the user that it was successful
        alert(`You've updated your credentials.`);
    }


    return (
        <div className="edit-filters-container">
            <BackButton/>
            <div className="edit-filters-height-container">
                <div className="edit-filters-flex-container">

                    <div className="edit-filters-header"><h1>Topic Filters:</h1></div>

                    <div className="edit-filters-sub-flex-container">
                        <div className="edit-filters-instructions">
                            <p>Select your categories of interest. These will be used to filter the profiles you see.</p>
                            <div className="edit-filters-legend">
                                <div className="edit-filters-legend-flex-container">
                                    <div id="legend-green" className="edit-filters-legend-color"></div>
                                    <div className="edit-filters-legend-text">Selected</div>
                                </div>
                                <div className="edit-filters-legend-flex-container">
                                    <div id="legend-black"  className="edit-filters-legend-color"></div>
                                    <div className="edit-filters-legend-text">De-selected</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-filters-topic-flex-container">
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="multiplayer-gaming">MultiPlayer Gaming</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="epic-novels">Epic Novels</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-anime">Anime</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-cosplay">Cosplay</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-larping">LARPing</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-dnd-role-play">DnD/Role Play</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-fantasy">Fantasy</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-manga-comics">Manga/ Comics</div>
                            <div onClick={ev => toggleButton(ev)} className="edit-filters-topic-selected" id="topic-pc-builds">PC Builds</div>
                        </div>
                    

                        <div className="edit-filters-button">
                            <div onClick={updateProfile}>Save Topics</div>    
                        </div>

                    </div>

                </div>

                <div className="edit-filters-flex-container">

                    <div className="edit-filters-header"><h1>Discovery Filters:</h1></div>

                    <div className="edit-filters-sub-flex-container">
                        <div className="edit-filters-discovery-settings">
                            <div className="edit-filters-discovery-text">
                                <p>Max Distance:</p>
                            </div>
                            <div className="edit-filters-discovery-dropdown">
                                <select>
                                    <option value="25">25 Miles</option>
                                    <option value="50">50 Miles</option>
                                    <option value="75">75 Miles</option>
                                    <option value="100">100 Miles</option>
                                </select>
                            </div>
                        </div>

                        <div className="edit-filters-discovery-settings">
                            <div className="edit-filters-discovery-text">
                                <p>Show Me:</p>
                            </div>
                            <div className="edit-filters-discovery-dropdown">
                                <select>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>
                        </div>

                        <div className="edit-filters-discovery-settings">
                            <div className="edit-filters-discovery-text">
                                <p>Age Minimum:</p>
                            </div>
                            <div className="edit-filters-discovery-dropdown">
                                <select>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>

                        <div className="edit-filters-discovery-settings">
                            <div className="edit-filters-discovery-text">
                                <p>Age Maximum:</p>
                            </div>
                            <div className="edit-filters-discovery-dropdown">
                                <select>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="45">45</option>
                                    <option value="46">46</option>
                                    <option value="47">47</option>
                                    <option value="48">48</option>
                                    <option value="49">49</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>

                        <div className="edit-filters-button">
                            <div onClick={updateProfile}>Save Filters</div>
                        </div>

                    </div>

                    

                </div>

                <div className="edit-filters-flex-container">
                    <div className="edit-filters-header">
                        <h1>Account settings</h1>
                    </div>

                    <div className="edit-filters-sub-flex-container">

                        <div className="edit-filters-account-setting">
                            <div className="edit-filters-account-setting-text">
                                <p>Old Email:</p>
                            </div>
                            <div className="edit-filters-account-setting-input">
                                <input onChange={ev => setOldEmail(ev.target.value)}></input>
                            </div>
                        </div>

                        <div className="edit-filters-account-setting">
                            <div className="edit-filters-account-setting-text">
                                <p>Old Password:</p>
                            </div>
                            <div className="edit-filters-account-setting-input">
                                <input onChange={ev => setOldPassword(ev.target.value)}></input>
                            </div>
                        </div>

                        <div className="divider"></div>
                        
                        <div className="edit-filters-account-setting">
                            <div className="edit-filters-account-setting-text">
                                <p>New Email:</p>
                            </div>
                            <div className="edit-filters-account-setting-input">
                                <input onChange={ev => setNewEmail(ev.target.value)}></input>
                            </div>
                        </div>

                        <div className="edit-filters-account-setting">
                            <div className="edit-filters-account-setting-text">
                                <p>New Password:</p>
                            </div>
                            <div className="edit-filters-account-setting-input">
                                <input onChange={ev => setNewPassword(ev.target.value)}></input>
                            </div>
                        </div>

                        <div className="edit-filters-account-setting">
                            <div className="edit-filters-account-setting-text">
                                <p>Confirm New Password:</p>
                            </div>
                            <div className="edit-filters-account-setting-input">
                                <input onChange={ev => setConfirmPassword(ev.target.value)}></input>
                            </div>
                        </div>

                        {confirmMatch?null:
                        <div className="mismatch-passwords-error-display">
                            <p>The old and new passwords must match exactly.</p>
                        </div>
                        }

                        {badLogin?
                        <div className="mismatch-passwords-error-display">
                            <p>Old Credentials Incorrect.</p>
                        </div>:null
                        }
                        
                        <div className="edit-filters-button">
                            <div onClick={updateCredentials}>Update Credentials</div>
                        </div>


                    </div>

                    

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(EditFilters);
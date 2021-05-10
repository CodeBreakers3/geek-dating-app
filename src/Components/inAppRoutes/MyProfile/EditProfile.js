//non component imports]
import './editprofile.css';

//component imports
import BackButton from './../BackButton';
import AchievementBar from './AchievementBar';

//EditProfile component
function EditProfile() {
    return (
        <div className="edit-profile-container">
            <BackButton/>
            <div className="my-profile-achievement-bar-flex-container">
                <AchievementBar/>
            </div>

            <div className="edit-profile-edit-images-flex-container">
                <div className="edit-profile-edit-images-title-text">
                    <h1>Profile Images</h1>
                </div>
                <div className="edit-profile-edit-images-image-container">
                    <img alt="edit-profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt="edit-profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt="edit-profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt="edit-profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>

                <div className="edit-profile-edit-images-image-container">
                    <img alt="edit-profile" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/169026503_10158922184255865_2897365770549964527_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=R0lYh7yPAUAAX-3dLCX&_nc_ht=scontent-hou1-1.xx&tp=6&oh=99a1bdde22707402fbf056b829c0a024&oe=60B8100E"/>
                    <div className="edit-profile-edit-images-x-icon">X</div>
                </div>
            </div>

            <div className="edit-profile-edit-details-flex-container">
                <div id="edit-profile-edit-details-about-me" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>About Me:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <textarea></textarea>
                    </div>
                </div>

                <div id="edit-profile-edit-details-gamertag" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Gamer Tag:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

                <div id="edit-profile-edit-details-title" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Title:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

                <div id="edit-profile-edit-details-religion" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Religion:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>Religious</option>
                            <option>Not Religious</option>
                            <option>Spiritual</option>
                            <option>Agnostic</option>
                            <option>Atheist</option>
                            <option>Prefer not to share</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-height" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Height:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>3 ft</option>
                            <option>4 ft</option>
                            <option>5 ft</option>
                            <option>6 ft</option>
                        </select>
                        <select>
                            <option>1 in</option>
                            <option>2 in</option>
                            <option>3 in</option>
                            <option>4 in</option>
                            <option>5 in</option>
                            <option>6 in</option>
                            <option>7 in</option>
                            <option>8 in</option>
                            <option>9 in</option>
                            <option>10 in</option>
                            <option>11 in</option>
                            <option>12 in</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-sex" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Sex:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-Binary</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-orientation" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Orientation:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>Straight</option>
                            <option>Gay</option>
                            <option>Pan</option>
                            <option>Bi</option>
                            <option>A</option>
                            <option>Bi</option>
                            <option>Demi</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-activity-level" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Activity Level:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>Slim</option>
                            <option>Active</option>
                            <option>Fit</option>
                            <option>Thicc</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-education" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Education:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

                <div id="edit-profile-edit-details-work" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Work:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

                <div id="edit-profile-edit-details-alcohol" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Alcohol:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>Never</option>
                            <option>Rarely</option>
                            <option>Sometimes</option>
                            <option>Often</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-smoking" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Smoking:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                    <select>
                            <option>Never</option>
                            <option>Rarely</option>
                            <option>Sometimes</option>
                            <option>Often</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-weed" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Weed:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                    <select>
                            <option>Never</option>
                            <option>Rarely</option>
                            <option>Sometimes</option>
                            <option>Often</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-drugs" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Drugs:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                    <select>
                            <option>Never</option>
                            <option>Rarely</option>
                            <option>Sometimes</option>
                            <option>Often</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-kids" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Kids:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <select>
                            <option>No kids</option>
                            <option>Have kids</option>
                        </select>
                    </div>
                </div>

                <div id="edit-profile-edit-details-favorite-food" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Favorite Food:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

                <div id="edit-profile-edit-details-current-game" className="edit-profile-edit-details-container">
                    <div className="edit-profile-edit-details-text">
                        <h1>Current Game:</h1>
                    </div>
                    <div className="edit-profile-edit-details-input">
                        <input></input>
                    </div>
                </div>

            </div>

            <div className="edit-profile-edit-details-save-button-container">
                <div className="edit-profile-edit-details-save-button">Save Changes</div>
            </div>

        </div>
    )
}

export default EditProfile;
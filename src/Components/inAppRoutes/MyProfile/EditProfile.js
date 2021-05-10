//non component imports
import React from 'react'
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
                <div className="edit-profile-edit-details-about-me-container">
                    <div className="edit-profile-edit-details-about-me-text">
                        <p>About Me:</p>
                    </div>
                    <div className="edit-profile-edit-details-about-me-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-gamer-tag-container">
                    <div className="edit-profile-edit-details-gamer-tag-text">
                        <p>Gamer Tag:</p>
                    </div>
                    <div className="edit-profile-edit-details-gamer-tag-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-title-container">
                    <div className="edit-profile-edit-details-title-text">
                        <p>Title:</p>
                    </div>
                    <div className="edit-profile-edit-details-title-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-religion-container">
                    <div className="edit-profile-edit-details-religion-text">
                        <p>Religion:</p>
                    </div>
                    <div className="edit-profile-edit-details-religion-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-height-container">
                    <div className="edit-profile-edit-details-height-text">
                        <p>Height:</p>
                    </div>
                    <div className="edit-profile-edit-details-height-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-sex-container">
                    <div className="edit-profile-edit-details-sex-text">
                        <p>Sex:</p>
                    </div>
                    <div className="edit-profile-edit-details-sex-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-activity-level-container">
                    <div className="edit-profile-edit-details-activity-level-text">
                        <p>Activity Level:</p>
                    </div>
                    <div className="edit-profile-edit-details-activity-level-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-education-container">
                    <div className="edit-profile-edit-details-education-text">
                        <p>Education:</p>
                    </div>
                    <div className="edit-profile-edit-details-education-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-work-container">
                    <div className="edit-profile-edit-details-work-text">
                        <p>Work:</p>
                    </div>
                    <div className="edit-profile-edit-details-work-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-sexual-orientation-container">
                    <div className="edit-profile-edit-details-sexual-orientation-text">
                        <p>Orientation:</p>
                    </div>
                    <div className="edit-profile-edit-details-sexual-orientation-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-alcohol-container">
                    <div className="edit-profile-edit-details-alcohol-text">
                        <p>Alcohol:</p>
                    </div>
                    <div className="edit-profile-edit-details-alcohol-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-smoking-container">
                    <div className="edit-profile-edit-details-smoking-text">
                        <p>Smoking:</p>
                    </div>
                    <div className="edit-profile-edit-details-smoking-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-weed-container">
                    <div className="edit-profile-edit-details-weed-text">
                        <p>Weed:</p>
                    </div>
                    <div className="edit-profile-edit-details-weed-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-drugs-container">
                    <div className="edit-profile-edit-details-drugs-text">
                        <p>Drugs:</p>
                    </div>
                    <div className="edit-profile-edit-details-drugs-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-kids-container">
                    <div className="edit-profile-edit-details-kids-text">
                        <p>Kids:</p>
                    </div>
                    <div className="edit-profile-edit-details-kids-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-favorite-food-container">
                    <div className="edit-profile-edit-details-favorite-food-text">
                        <p>Favorite Food:</p>
                    </div>
                    <div className="edit-profile-edit-details-favorite-food-input">
                        <input></input>
                    </div>
                </div>

                <div className="edit-profile-edit-details-current-game-container">
                    <div className="edit-profile-edit-details-current-game-text">
                        <p>Current Game:</p>
                    </div>
                    <div className="edit-profile-edit-details-current-game-input">
                        <input></input>
                    </div>
                </div>

            </div>

            <div className="edit-profile-edit-details-save-button">
                <button>Save Changes</button>
            </div>

        </div>
    )
}

export default EditProfile;
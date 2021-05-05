//non-component imports

//component imports
import BackButton from './../BackButton';

//ProfileLarge component
function ProfileLarge() {
    return (
        <div className="large-profile-container">
        <BackButton />
            {/* First large profile section - an image and the name/gamertag/pronouns/primary interest/location. */}
            <div className="large-profile-top-details-container">

                <div className="large-profile-top-details-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16462954_10154716244105865_4173466093140820629_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IXk-uNfO-8sAX-_RGXI&_nc_ht=scontent-hou1-1.xx&oh=b00d7bad776bf6f15b44e09fae98e964&oe=60B6D444"/>
                </div>

                <div className="large-profile-top-details-text-container">
                    <div className="large-profile-top-details-text-name-container">
                        <p>First Name Last Name</p>
                    </div>

                    <div className="large-profile-top-details-text-gamertag-container">
                        <p>Gamertag</p>
                    </div>

                    <div className="large-profile-top-details-text-pronouns-container">
                        <p>pronoun/pronoun</p>
                    </div>

                    <div className="large-profile-top-details-text-primary-interest-container">
                        <p>Primary Interest: Interest</p>
                    </div>

                    <div className="large-profile-top-details-text-location-container">
                        
                        <div className="large-profile-top-details-text-location-icon-container">
                            ICON
                        </div>

                        <div className="large-profile-top-details-text-location-text-container">
                            <p>City, State</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second large profile section - an image and the full "about" description text. */}
            <div className="large-profile-2nd-details-container">
                <div className="large-profile-2nd-details-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/40449178_10156818001328939_8286173386472685568_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=84a396&_nc_ohc=FfV0GCg9bDoAX_EE2-z&_nc_ht=scontent-hou1-1.xx&oh=167769b00a43f3148b98fd2d1f2afc83&oe=60B714BF"/>
                </div>

                <div className="large-profile-2nd-details-text-container">
                    <div className="large-profile-2nd-details-text-about-container">
                        <p>I like to do cool things, and sometimes I don’t. Ya know? It’s really just a matter of the mood I’m in. <br/><br/>I like open world multi-player, sidescrollers, animes, and my dog.</p>
                    </div>
                </div>
            </div>

            {/* Third large profile section - an image and all the non-core profile details - IF THEY ARE PROVIDED */}
            <div className="large-profile-3rd-details-container">
                <div className="large-profile-3rd-details-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/16299617_10154998698963648_1330110250511975667_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=sO9tJXj8kA0AX9PNO8x&_nc_ht=scontent-hou1-1.xx&oh=3ea9ccf4dc93a7774ebfedb9eaf7dc6d&oe=60B8E038"/>
                </div>

                <div className="large-profile-3rd-details-text-container">
                    <div className="large-profile-3rd-details-text-title">
                        <p>Title: title</p>
                    </div>
                    <div className="large-profile-3rd-details-text-religion">
                        <p>Religion: religion</p>
                    </div>
                    <div className="large-profile-3rd-details-text-height">
                        <p>Height: height</p>
                    </div>
                    <div className="large-profile-3rd-details-text-fitness">
                        <p>Fitness: fitness</p>
                    </div>
                    <div className="large-profile-3rd-details-text-sex">
                        <p>Biological Sex: sex</p>
                    </div>
                    <div className="large-profile-3rd-details-text-orientation">
                        <p>Orientation: Straight</p>
                    </div>
                    <div className="large-profile-3rd-details-text-work">
                        <p>Work: work</p>
                    </div>
                    <div className="large-profile-3rd-details-text-education">
                        <p>Education: education</p>
                    </div>
                </div>
            </div>

            {/* Fourth large profile section - an image and alcohol, smoking, weed, drugs, and kids */}
            <div className="large-profile-4th-details-container">
                <div className="large-profile-4th-details-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/22519225_10155685529316772_6139539257972788036_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=EQtlL1sSqa4AX9CUZ6R&_nc_ht=scontent-hou1-1.xx&oh=25f3b8db13f44d43ad4c0e722196b278&oe=60B7E6F4"/>
                </div>

                <div className="large-profile-4th-details-text-container">
                    <div className="large-profile-4th-details-text-alcohol">
                        <p>Alcohol: socially</p>
                    </div>
                    <div className="large-profile-4th-details-text-smoking">
                        <p>Smoking: never</p>
                    </div>
                    <div className="large-profile-4th-details-text-weed">
                        <p>Weed: never</p>
                    </div>
                    <div className="large-profile-4th-details-text-drugs">
                        <p>Drugs: never</p>
                    </div>
                    <div className="large-profile-4th-details-text-kids">
                        <p>Kids: No kids - want kids</p>
                    </div>
                </div>
            </div>

            {/* Fifth large profile section - an image and Interests */}
            <div className="large-profile-5th-details-container">
                <div className="large-profile-5th-details-image-container">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/10405430_10152724053705865_5503561984453623128_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=ehbxPRUf-IUAX8Ik77n&_nc_ht=scontent-hou1-1.xx&oh=bcb02608a380a87a41933a0224bc8b42&oe=60B718C7"/>
                </div>

                <div className="large-profile-5th-details-text-container">
                    <div className="large-profile-4th-details-text-interests">
                        <p>Interests:
                        <ul>
                            <li>Interest 1</li>
                            <li>Interest 2</li>
                            <li>Interest 3</li>
                        </ul></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileLarge;
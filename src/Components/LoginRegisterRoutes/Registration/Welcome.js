import './CSS/Welcome.css'
import React, {useState} from 'react'
import { Link } from "react-router-dom"

//Welcome component
const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-title">
                    <h1>It's dangerous to go alone...</h1>
            </div>
            <div className="welcome-flex-container">
                <div className="welcome-main-text">
                    <p><span className="bolded">Take this:</span> you're One Up dating account! We hope you find your master elo terran player, your Warhammer cosplay look-alike, your Ezreal main bot laner... Love comes in all shapes and sizes.</p>
                    <p>Below are a few of our rules and guidelines for the app. By clicking on the "Venture Forth" button below, or by logging into the app in any way, you agree to follow these guidelines:</p>
                    <h1 id="guidelines">One Up Dating - Guidelines:</h1>
                    <ul>
                        <li><span className="bolded">You are the Chosen One:</span> Photos and profile info should reflect you and your true Chosen nature. Please only post profile info that is true and accurate to your own identity. One Up Dating is not responsible for any mis-representation of individuals - so just keep it classy nerds.</li>
                        <li><span className="bolded">18+:</span> You must be above the age of 18 to use this app. If you are cursed monster who ages backwards each time your monster form manifests, you STILL cannot use this app unless you are over 18.</li>
                        <li><span className="bolded">Internet Safety Please:</span> One up dating is not responsible for your interactions with other members. We do not conduct criminal background checks nor do we iniquire into the background of app members outside of the profile details visible on each account. Please exercise caution when meeting new people online.</li>
                        <li><span className="bolded">Mission Accomplished:</span> We hope each one of us can find the Tidus to our Yuna, the Senna to our Lucian, the Ellie to our Riley... Whatever your quest we hope you will be frank with others on this app about your goals so we can all find what we are looking for.</li>
                    </ul>
                </div>
            </div>
            <div className="welcome-title">
                <h1>Most important: have fun!</h1>
            </div>

            <Link to='/login'>
                <div className="welcome-button">Venture Forth!</div>
            </Link>
        </div>
    )
}

export default Welcome;
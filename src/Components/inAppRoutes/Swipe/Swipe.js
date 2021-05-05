//non-component imports
import {useState} from 'react';

//component imports
import Matched from './Matched';
import ProfileSmall from './ProfileSmall';

//Swipe component
function Swipe() {
    
    const [isMatch, setIsMatch] = useState(false);

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
            <ProfileSmall />
            <button onClick={dislikeProfile}>Dislike</button>
            <button onClick={likeProfile}>Like</button>
        </div>

    return (
        <div className="swipe-container">
            {isMatch?<Matched setIsMatch={setIsMatch}/>:mainDisplay}
        </div>
    )
}

export default Swipe;
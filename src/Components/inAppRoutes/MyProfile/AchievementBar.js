//non component imports
import './achievementbar.css';
import {useState} from 'react';

export default function AchievementBar() {
    const [percentage, setPercentage] = useState(50);

    const achievementBarStyles = {
        width: `${percentage}%`
      };

    return (
            <div className="achievement-bar-container">
                <div className="achievement-bar" style={achievementBarStyles}></div>
                <div className="achievement-percent">{percentage}%</div>
            </div>
    )
}
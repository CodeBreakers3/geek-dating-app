//non component imports
import React from 'react'
import './achievementbar.css';
import {useState,useEffect} from 'react';

export default function AchievementBar(props) {
    const [percentage, setPercentage] = useState(0);
const {count}=props
useEffect(()=>{
    setPercentage(count)
},[count])

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
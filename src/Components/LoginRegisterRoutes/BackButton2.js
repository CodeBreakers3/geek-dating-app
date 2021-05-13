//non component imports
import React from 'react'

//BackButton component
const BackButton2 = (props) => {
    return (
        <div className="back-button-component">
            <div className="back-button-icon-container" onClick={() => props.setIndexTracker(props.indexTracker-1)}>
                <img alt="back button" src="https://staticsiteimages.s3-us-west-2.amazonaws.com/back3.svg"/>
            </div>
        </div>
    )
}

export default BackButton2;
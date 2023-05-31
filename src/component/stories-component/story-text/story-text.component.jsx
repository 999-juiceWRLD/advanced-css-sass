import React from "react";
import "./story-text.styles.scss";

function StoryText(props) {
    return (
        <div className="story">
            {props.text}
        </div>
    );
}

export default StoryText;

import React from "react";
import "./story-text.styles.scss";

function StoryText(props) {
    return (
        <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default StoryText;

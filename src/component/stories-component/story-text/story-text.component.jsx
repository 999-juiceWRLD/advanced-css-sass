import React from "react";
import "./base-story-comp.styles.scss";

function BaseStoryComp(props) {
    return (
        <div className="story">
            {props.text}
        </div>
    );
}

export default BaseStoryComp;

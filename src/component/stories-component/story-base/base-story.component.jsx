import React from "react";
import "./base-story-comp.styles.scss";
import Figure from "../figure-details/figures.component";
import StoryText from "../story-text/story-text.component";

function BaseStoryComp(props) {
    return (
        <div className="story">
            <Figure path={props.path} 
                    name={props.name}/>
            <StoryText 
                    title={props.title}
                    text={props.text}/>
        </div>
    );
}

export default BaseStoryComp;

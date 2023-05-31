import React from "react";
import "./base-story-comp.styles.scss";
import Figure from "../figure-details/figures.component";

function BaseStoryComp(props) {
    return (
        <div className="story">
            <Figure />
            {props.children}
        </div>
    );
}

export default BaseStoryComp;

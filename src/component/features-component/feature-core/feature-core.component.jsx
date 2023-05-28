import React from "react";
import "./feature-core.styles.scss";

function FeatureCore(props) {
    return (
        <div className="feature-box">
                <i className={`feature-box__icon ${props.icon}`}></i>
                <h3 className="heading-tertiary">{props.heading}</h3>
                <p className="feature-box__text">{props.text}</p>
        </div>
    );
}

export default FeatureCore;

import React from "react";
import "./second-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function SecondFeature() {
    return (
            <FeatureCore
                icon={"icon-basic-world"}
                heading={"Explore The World"}
                text={"Remember every step you took — let \
                      everyone see what's amazing. Feel the \
                      freedom."} 
            />
    );
}

export default SecondFeature;

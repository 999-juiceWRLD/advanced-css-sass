import React from "react";
import "./fourth-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function FourthFeature() {
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

export default FourthFeature;

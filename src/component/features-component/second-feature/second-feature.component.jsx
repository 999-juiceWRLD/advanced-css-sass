import React from "react";
import "./second-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function SecondFeature() {
    return (
            <FeatureCore
                icon={"icon-basic-compass"}
                heading={"Meet The Nature"}
                text={"Discover the untamed beauty of nature like never before. \
                      Trust us, you'll like it."} 
            />
    );
}

export default SecondFeature;

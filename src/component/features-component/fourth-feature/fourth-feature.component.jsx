import React from "react";
import "./fourth-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function FourthFeature() {
    return (
            <FeatureCore
                icon={"icon-basic-heart"}
                heading={"Heal Yourself"}
                text={"Experience a transformative journey towards holistic healing.\
                      Rejuvenate your mind."} 
            />
    );
}

export default FourthFeature;

import React from "react";
import "./first-feature.styles.scss";
import FeatureCore from "../feature-core/feature-core.component";

function FirstFeature() {
    return (
        <div className="col-1-of-4">
            <FeatureCore
                icon={"icon-basic-world"}
                heading={"Explore The World"}
                text={"Lorem ipsum falan filan. bize paranı kazandır \
                      sonra siktir git nereye gidersen."} 
            />
        </div>
    );
}

export default FirstFeature;

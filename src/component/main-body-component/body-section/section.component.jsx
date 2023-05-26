import React from "react";
import "./section.styles.scss";
import BodyHeadingText from "../body-header/body-header.component";
import TextImgRow from "../text-img-composition/text-img.component";

function BodySection() {
    return (
        <section className="section-about">
            <BodyHeadingText />
            <TextImgRow />
        </section>
    );
}

export default BodySection;

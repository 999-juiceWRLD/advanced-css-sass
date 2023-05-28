import React from "react";
import "./about-section.styles.scss";
import BodyHeadingText from "../about-header/about-header.component";
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

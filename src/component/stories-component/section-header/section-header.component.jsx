import React from "react";
import "./section-header.styles.scss";
import videoMp4 from "../../../assets/img/video.mp4";
import videoWebm from "../../../assets/img/video.webm";

function SectionHeader() {
    return (
        <section className="section-stories">
            {/* <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={videoMp4} type="video/mp4"/>
                    <source src={videoWebm} type="video/webm"/>
                    Your browser is not supported for this video.
                </video>
            </div> */}
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We Make People Happy
                </h2>
            </div>
        </section>
    );
}

export default SectionHeader;

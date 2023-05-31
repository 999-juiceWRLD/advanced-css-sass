import React from "react";
import "./section-core.styles.scss";

function SectionCore(props) {
    return (
        <section className="stories">
            <div className="row">
                {props.childComponent}
            </div>
        </section>
        
    );
}

export default SectionCore;

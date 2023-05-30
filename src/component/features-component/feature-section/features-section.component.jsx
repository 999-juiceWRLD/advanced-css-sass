import React from "react";
import "./features-section.styles.scss";

function Feature(props) {
    return (
        <section className="section-features">
            <div className="row">
                {props.childComponent1}
                {props.childComponent2}
                {props.childComponent3}
                {props.childComponent4}
            </div>
        </section>
    );
}

export default Feature;

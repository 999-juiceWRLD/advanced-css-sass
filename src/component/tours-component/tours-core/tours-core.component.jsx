import React from "react";
import "./tours-core.styles.scss";
import FirstComponent from "../tours-row/first-component/first-comp.component";

function ToursCore() {
    return (
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most Popular Tours
                </h2>
            </div>
            <FirstComponent />
        </section>
    );
}

export default ToursCore;

import React from "react";

function SectionCore(props) {
    return (
        <div className="row">
            {props.childComponent}
        </div>
    );
}

export default SectionCore;

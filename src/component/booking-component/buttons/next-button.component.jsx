import React from "react";

function NextButton() {

    const styles = {
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        borderRadius: "10rem",
        padding: "1.5rem 4rem",
        textTransform: "uppercase",
        transition: "all 0.3s"
    };

    return (
        <div className="form__group">
            <button className="btn btn--green" style={styles}>
                Next Step &rarr;
            </button>
        </div>
    );
}

export default NextButton;

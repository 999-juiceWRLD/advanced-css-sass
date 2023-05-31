import React from "react";
import "./figures.styles.scss";

function Figure(props) {
    return (
        <figure className="story__shape">
            <img src={require("../../../assets/img/nat-8.jpg")} 
                 className="story__img"
                 alt="client on a tour" />
            <figcaption className="story__caption">Jane Doe</figcaption>
        </figure>
    );
}

export default Figure;

import React from "react";
import "./figures.styles.scss";

function Figure(props) {
    return (
        <figure className="story__shape">
            <img src={require(`../../../assets/img/${props.path}`)} 
                 className="story__img"
                 alt="client on a tour" />
            <figcaption className="story__caption">{props.name}</figcaption>
        </figure>
    );
}

export default Figure;

import React from "react";
import Icon from "../misc/icon/icon-base.component";

function NavListElement(props) {
    return (
        <ul className="side-nav">
            <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                    <Icon className={"search__icon"} name={props.iconName} />
                    <span>{props.spanName}</span>
                </a>
            </li>
        </ul>
    );
}

export default NavListElement;

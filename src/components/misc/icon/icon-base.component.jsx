import React from "react";
import symbolDef from "../../../assets/icons/symbol-defs.svg";

function Icon({name, clsName, ...props}) {

    const iconNames = [
        "bookmark",
        "chevron-thin-right",
        "aircraft-take-off",
        "chat",
        "home",
        "key",
        "location-pin",
        "magnifying-glass",
        "map",
        "star"
    ]

    if (!(iconNames.includes(name))) {
        console.warn("no such icon with this name, maybe check again?");
    }

    const iconPath = `${symbolDef}#icon-${name}`;

    return (
        <svg className={clsName} {...props} >
            <use xlinkHref={iconPath}></use>
        </svg>
    );
}

export default Icon;

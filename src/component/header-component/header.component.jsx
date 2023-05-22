import React from "react";
import "./header-component.styles.css";
import "../../assets/css/style.css";

function HeaderComp() {
    return (
        <header className="header">
            <div className="logo-box">
                <img src={require("../../assets/img/logo-white.png")}
                     alt="logo-image"
                     className="logo" 
                />
            </div>
        </header>
    );
}

export default HeaderComp;
import React from "react";
import "./header-component.styles.css";
import "../../../assets/css/style.css";
import HeaderText from '../header-text/header-text.component';


function HeaderComp() {
    return (
        <header className="header">
            <div className="logo-box">
                <img src={require("../../../assets/img/logo-white.png")}
                     alt="logo"
                     className="logo" 
                />
            </div>
            <HeaderText />
        </header>
    );
}

export default HeaderComp;

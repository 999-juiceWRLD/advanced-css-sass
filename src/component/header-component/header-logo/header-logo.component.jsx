import React from "react";
import "./header-logo.styles.scss";

function HeaderLogo() {
    return (
        <div className="header__logo-box">
                <img src={require("../../../assets/img/logo-white.png")}
                     alt="logo"
                     className="header__logo" 
                />
        </div>
    );
}

export default HeaderLogo;

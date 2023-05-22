import React from "react";
import "./header-logo.styles.css";

function HeaderLogo() {
    return (
        <div className="logo-box">
                <img src={require("../../../assets/img/logo-white.png")}
                     alt="logo"
                     className="logo" 
                />
        </div>
    );
}

export default HeaderLogo;

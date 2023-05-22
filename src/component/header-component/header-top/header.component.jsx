import React from "react";
import "./header.styles.css";
import "../../../assets/css/style.css";
import HeaderText from '../header-text/header-text.component';
import HeaderLogo from "../header-logo/header-logo.component";

function HeaderComp() {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderText />
        </header>
    );
}

export default HeaderComp;

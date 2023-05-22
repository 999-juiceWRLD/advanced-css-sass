import React from "react";
import "./header-component.styles.css";
import "../../../assets/css/style.css";
import HeaderText from '../header-text/header-text.component';
import HeaderButton from "../header-button/header-button.component";
import HeaderLogo from "../header-logo/header-logo.component";

function HeaderComp() {
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderText />
            <HeaderButton />
        </header>
    );
}

export default HeaderComp;

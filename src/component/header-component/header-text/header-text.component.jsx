import React from "react";
import "./header-text.styles.css";
import HeaderButton from "../header-button/header-button.component";

function HeaderText() {
    return (
        <div className="text-box">
            <div className="heading-primary">
                <span className="heading-primary-main">Outdoors</span>
                <span className="heading-primary-sub">
                    is where life happens
                </span>
            </div>
            <HeaderButton />
        </div>
    );
}

export default HeaderText;

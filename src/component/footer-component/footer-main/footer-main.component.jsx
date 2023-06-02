import React from "react";
import logoGreen from "../../../assets/img/logo-green-2x.png";
import FooterList from "../footer-list/list.component";

function FooterMain() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logoGreen} alt="" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <FooterList />
                </div>
                <div className="col-1-of-2"></div>
            </div>
        </footer>
    );
}

export default FooterMain;

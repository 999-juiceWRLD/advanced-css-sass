import React from "react";
import logoGreen from "../../../assets/img/logo-green-2x.png";
import FooterList from "../footer-list/list.component";
import "./footer-main.styles.scss";

function FooterMain() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logoGreen} alt="" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2" style={{ display: "flex" }} >
                    <FooterList />
                </div>
                <div className="col-2-of-2">
                    <p className="footer__copyright">
                        Built by <a href="https://github.com/999-juiceWRLD" target="blank" className="footer__copyright">Kahraman CANIKOGLU</a> &
                        Designed by <a href="https://github.com/jonasschmedtmann" target="blank" className="footer__copyright">Jonas SCHMEDTMANN</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterMain;

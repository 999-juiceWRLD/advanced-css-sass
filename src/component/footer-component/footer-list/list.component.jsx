import React from "react";
import "./list.styles.scss";

function FooterList() {
    return (
        <div className="footer__navigation">
            <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
        </div>
    );
}

export default FooterList;

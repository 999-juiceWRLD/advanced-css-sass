import React from "react";
import "./main-board.styles.scss";
import forestImage from "../../../assets/img/nat-10.jpg";

function MainBoard() {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <img alt="forest" src={forestImage} className="book-img" /> 
                    <div className="image-overlay"></div>
                </div>
            </div>
        </section>
    );
}

export default MainBoard;

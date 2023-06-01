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
                    <div className="form-container">
                        <form action="#" className="form">
                            <div className="u-center-text u-margin-bottom-big">
                                <h2 className="heading-secondary">
                                    Register Now
                                </h2>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="name"
                                       placeholder="Full Name" required />
                                {/* <label htmlFor="name" className="form__label">Full Name</label> */}
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="email"
                                       placeholder="Email Address" required />
                                {/* <label htmlFor="email" className="form__label">Email Address</label> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBoard;

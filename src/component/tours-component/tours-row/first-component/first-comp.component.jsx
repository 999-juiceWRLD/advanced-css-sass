import React from "react";
import "./first-comp.styles.scss";
import BookButton from "../../tours-button/tours-button.component";

function FirstComponent() {
    return (
    <div className="col-1">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture-1">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                        The Sea Explorer
                    </span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>3-day tour</li>
                        <li>up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>sleep in 5-star hotel</li>
                        <li>relatively cheap</li>
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value"> &#36;297</p>
                        <BookButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default FirstComponent;

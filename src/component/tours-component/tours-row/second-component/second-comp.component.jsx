import React from "react";
import BookButton from "../../tours-button/tours-button.component";

function SecondComponent() {
    return (
    <div className="col-2">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture-2">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                        The Forest Hiker
                    </span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>7-day tour</li>
                        <li>up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>sleep in provided tents</li>
                        <li>mediocre price</li>
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value"> &#36;497</p>
                        <BookButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SecondComponent;

import React from "react";
import BookButton from "../../tours-button/tours-button.component";

function ThirdComponent() {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture-3">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">
                            The Snow Adventurer
                        </span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>5-day tour</li>
                            <li>up to 15 people</li>
                            <li>3 tour guides</li>
                            <li>sleep in 5-star hotel</li>
                            <li>let the adrenaline run in your blood</li>
                        </ul>
                    </div>
                    </div>
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value"> &#36;897</p>
                            <BookButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdComponent;

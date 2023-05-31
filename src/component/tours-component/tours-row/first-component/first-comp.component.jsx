import React from "react";
import "./first-comp.styles.scss";

function FirstComponent() {
    return (
    <div className="col-1">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture-1">
                    &nbsp;
                </div>
                <div className="card__heading">
                    Heading
                </div>
                <div className="card__details">
                    Details
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                TEXT BACK
            </div>
        </div>
    </div>
    );
}

export default FirstComponent;

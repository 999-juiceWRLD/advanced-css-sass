import React from "react";

function SecondComponent() {
    return (
    <div className="col-2">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture-2">
                    &nbsp;
                </div>
                <div className="card__heading">
                    Heading
                </div>
                <div className="card__details">
                    Details
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
                COMPONENT BACK 2
            </div>
        </div>
    </div>
    );
}

export default SecondComponent;

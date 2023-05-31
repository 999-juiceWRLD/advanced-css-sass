import React from "react";

function ThirdComponent() {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture-3">
                        &nbsp;
                    </div>
                    <div className="card__heading">
                        Heading
                    </div>
                    <div className="card__details">
                        Details
                    </div>
                    </div>
                <div className="card__side card__side--back card__side--back-3">
                    COMPONENT BACK 3
                </div>
            </div>
        </div>
    );
}

export default ThirdComponent;

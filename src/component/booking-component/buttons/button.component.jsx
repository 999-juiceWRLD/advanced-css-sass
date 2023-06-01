import React from "react";

function Buttons() {
    return (
        <div className="form__group">
            <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="small"/>
                <label htmlFor="small" className="form__radio-label">Small Tour Group</label>
            </div>
            <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="large"/>
                <label htmlFor="large" className="form__radio-label">Large Tour Group</label>
            </div>
        </div>
    );
}

export default Buttons;

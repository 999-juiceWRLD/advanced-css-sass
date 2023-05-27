import React from "react";
import "./text-img.styles.scss";
import nat1 from "../../../assets/img/nat-1-large.jpg"
import nat2 from "../../../assets/img/nat-2-large.jpg"
import nat3 from "../../../assets/img/nat-3-large.jpg"

function TextImgRow() {
    return (
        <div className="row">
            <div className="col-element">
                <h3 className="heading-tertiary heading-margin">
                    You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                    Green and blue are the life. This is not a trip that you'd regret. 
                    In nature, you will find not yourself, but also humankind's ancestors.
                    Be amazed by the flamboyant, elegant animals. Who wouldn't want to 
                    make it there?
                </p>

                <h3 className="heading-tertiary heading-margin">
                    Live Adventures Like You Never Had Before
                </h3>
                <p className="paragraph">
                    This, is going to be your most exciting journey. Animals in the wild life
                    is going to amaze you, therefore you will be the one who collects memories.
                    It will worth, we promise. 
                </p>

                <a href="#" className="button-text">Learn More &rarr;</a>

            </div>
            <div className="col-element">
                <div className="composition">
                    <div className="first-photo">
                    <img src={nat1} alt="photo-1" className="composition__photo composition__photo--p1"/>
                    </div>
                    <div className="second-photo">
                    <img src={nat2} alt="photo-2" className="composition__photo composition__photo--p2"/>
                    </div>
                    <div className="third-photo">
                    <img src={nat3} alt="photo-3" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextImgRow;

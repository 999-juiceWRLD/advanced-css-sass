import React from "react";
import "./text-img.styles.scss";

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
                <h3 className="heading-tertiary">
                    You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                    This, is going to be your most exciting journey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci magni aperiam sunt voluptatem doloribus velit dolor ex eaque autem ut est consequatur porro doloremque minus quasi dolore, dignissimos quam.
                </p>
            </div>
        </div>
    );
}

export default TextImgRow;

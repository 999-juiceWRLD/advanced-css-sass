import React from "react";

function ComponentRow(props) {
    return (
        <div className="row">
            {props.childComponent1}
            {props.childComponent2}
            {props.childComponent3}
        </div>
    );
}

export default ComponentRow;

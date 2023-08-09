import React from "react";
import './CompletedSubtaskItem.css';

export default function CompletedSubtaskItem(props) {
    function showBlock(){
        props.sabtaskBlock(props.element.name, props.element.description);
    }

    return (
        <div>
            <button onClick={showBlock} className="subtaskcompleted--button" > {props.element.name} </button>
        </div>
    );
}
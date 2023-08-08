import React from "react";
import './CompletedSubtaskItem.css';

export default function CompletedSubtaskItem(props) {
  

    return (
        <div>
            <button> {props.element.name} </button>
        </div>
    );
}
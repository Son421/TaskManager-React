import React from "react";
import './Subtask.css';

export default function Subtask(props) {
    function showBlock(){
        props.sabtaskBlock(props.element.name, props.element.description, props.id);
    }

    return (
        <div>
            <div>
                <button onClick={showBlock} className={props.element.done ? "sabtasklist__element__done" : "sabtasklist__element"}> {props.element.name} </button>
            </div>
        </div>
    );
}
import React from "react";
import './Sabtask.css';

export default function Sabtask(props) {
    function showBlock(){
        props.sabtaskBlock(props.element.name, props.element.description, props.id);
    }

    return (
        <div>
            <div>
                <button onClick={showBlock} className="sabtasklist__element"> {props.element.name} </button>
            </div>
        </div>
    );

}


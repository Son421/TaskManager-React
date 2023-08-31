import React from "react";
import CompletedSubtask from "./CompletedSubtask/CompletedSubtask";
import './CompletedItem.css';
import {TiTrash, TiStarFullOutline} from "react-icons/ti";

export default function CompletedItem(props) {
    let starStyle = 'completed__task--no_prioriti';
    
    if(props.element.priority){
        starStyle = 'completed__task--prioriti';
    }
    
    function remove(){
        props.remove(props.element);
    }

 return (
    <div>
        <div className="completed__task--wrapper">
            <TiStarFullOutline className={starStyle}/>
            <TiTrash onClick={remove} className="completed__task--clear"/>
            <p className="completed__task--name"> {props.element.name}</p>
            <p className="completed__task--description"> {props.element.description} </p>
        </div>
        <div className="completed--wrapper">
            <CompletedSubtask element={props.element.subtaskArr}/>  
            <div>
                <div className="completed__taskList"> TaskList - {props.element.taskListIs}</div>
            </div>
        </div>
    </div>
 );
}

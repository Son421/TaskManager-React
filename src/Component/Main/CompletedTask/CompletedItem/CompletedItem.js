import React from "react";
import CompletedSubtask from "./CompletedSubtask/CompletedSubtask";
import './CompletedItem.css';
import { TiTrash } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";

export default function CompletedItem(props) {

    // додати до якого тасклисту він відносився 


    function clear(){
        props.element.complete = true; 
        props.remove();
      }
    
    let starStyle = 'completed__task--no_prioriti';
    
    if(props.element.priority){
        starStyle = 'completed__task--prioriti';
    }
    
 return (
    <div>
        <div className="completed__task--wrapper">
            <TiStarFullOutline className={starStyle}/>
            <TiTrash onClick={clear} className="completed__task--clear"/>
            <p className="completed__task--name"> {props.element.name}</p>
            <p className="completed__task--description"> {props.element.description} </p>
        </div>
        <div  className="completed--wrapper">
            <CompletedSubtask element={props.element.subtaskArr}/>
            <span className="completed__taskList"> TaskList - {props.element.taskListIs}</span>
        </div>
    </div>
 );
  
}

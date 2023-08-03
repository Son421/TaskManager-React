import React from "react";
import './CompletedItem.css'
import { TiTrash } from "react-icons/ti";

export default function CompletedItem(props) {

    // потрібно додати відобрежання пріорітетності, якщо таск був пріорітетним то буде зірочкаБ якщо ні, то не буде нічого 
    // додати до якого тасклисту він відносився 

    function clear(){
        props.element.complete = true; 
        props.remove();
      }
    

 return (
    <div>
        <div className="completed__task--wrapper">
            <TiTrash onClick={clear} className="completed__task--clear"/>
            <p className="completed__task--name"> {props.element.name}</p>
            <p className="completed__task--description"> {props.element.description} </p>
        </div>
        <div>
            
        </div>
    </div>
 );
  
}

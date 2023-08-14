import React, {useState} from "react";
import CompletedSubtaskItem from "./CompletedSubtaskItem/CompletedSubtaskItem";
import './CompletedSubtask.css';
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";

export default function CompletedSubtask(props) {
   const [buttonActivate, setButtonActivate] = useState(false);

   const [elements, setElemets] = useState({elementName: '', elementDescription: '', 
   elementStyle: 'subtask--block__hidden'});

   function click(){
      setButtonActivate(!buttonActivate);
   }

   function sabtaskBlock(elemN, elemD){
      setElemets({elementName: elemN, elementDescription: elemD, elementStyle: "subtask--block"});
   }

   function clouseElemnet(){
      setElemets({elementStyle: 'subtask--block__hidden'});
   }
  
   if(props.element.length > 0){
      if(!buttonActivate){
         return (
            <div className="completed__subtask--wrapper">
               <div>
                  <button className="button--compl__subtask__clouse" onClick={click}> Subtask <TiArrowSortedDown/> </button>
               </div>
               <div className="subtask--block__wrapper">
                  <div className={elements.elementStyle}>
                     <TiTimes className="button__roll--up" onClick={clouseElemnet}/>
                     <p className="subtask--name"> {elements.elementName} </p>
                     <p className="subtask--description"> {elements.elementDescription} </p>
                  </div>
               </div>
            </div>
         );
      }else{
         return (
            <div className="completed__subtask--wrapper">
               <div>
                  <button className="button--compl__subtask__open" onClick={click}> Subtask <TiArrowSortedUp/> </button>
                  {props.element.map((i, index) => (
                     <CompletedSubtaskItem element={i} key={index} sabtaskBlock={sabtaskBlock}/>
                  ))}
               </div>
               <div className="subtask--block__wrapper">
                  <div className={elements.elementStyle}>
                     <TiTimes className="button__roll--up" onClick={clouseElemnet}/>
                     <p className="subtask--name"> {elements.elementName} </p>
                     <p className="subtask--description"> {elements.elementDescription} </p>
                  </div>
               </div>
            </div>
         );
      }
      // length 0;
   }else{
      if(!buttonActivate){
         return (
            <div className="completed__subtask--wrapper">
               <div>
                  <button className="button--compl__subtask__clouse"  onClick={click}> Subtask <TiArrowSortedDown/> </button>
               </div>
            </div>
         );
      }else{
         return (
            <div className="completed__subtask--wrapper">
               <div>
                  <button className="button--compl__subtask__open"  onClick={click}> Subtask <TiArrowSortedUp/> </button>
               </div>
               <div>
                  <div className="no__completed__sabtask"> Сабтасків немає </div>
               </div>
            </div>
         );
      }
   }
}

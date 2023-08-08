import React, {useState} from "react";
import './CompletedSubtask.css';
import CompletedSubtaskItem from "./CompletedSubtaskItem/CompletedSubtaskItem";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

export default function CompletedSubtask(props) {
   const [buttonActivate, setButtonActivate] = useState(false);

   function click(){
      setButtonActivate(!buttonActivate);
   }

   if(props.element.length > 0){
      if(!buttonActivate){
         return (
            <div>
               <div>
                  <button  onClick={click}> Subtask <TiArrowSortedDown/> </button>
               </div>
            </div>
         );
      }else{
         return (
            <div>
               <div>
                  <button  onClick={click}> Subtask <TiArrowSortedUp/> </button>
                  {props.element.map((i, index) => (
                     <CompletedSubtaskItem element={i} key={index}/>
                  ))}
               </div>
            </div>
         );
      }
      // length 0
   }else{
      if(!buttonActivate){
         return (
            <div>
               <div>
                  <button  onClick={click}> Subtask <TiArrowSortedDown/> </button>
               </div>
            </div>
         );
      }else{
         return (
            <div>
               <div>
                  <button  onClick={click}> Subtask <TiArrowSortedUp/> </button>
               </div>
               <div>
                  <div className="no__completed__sabtask"> Сабтаски відсутні </div>
               </div>
            </div>
         );
      }
   }
}

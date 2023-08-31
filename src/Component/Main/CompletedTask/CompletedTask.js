import React from "react";
import './CompletedTask.css'
import CompletedItem from "./CompletedItem/CompletedItem";
import {TiTrash} from "react-icons/ti";
import {useSelector, useDispatch} from "react-redux";
import { completedRemove, completedCrear } from "../../../features/completedSlice";

export default function CompletedTask(props) {
  const completedTask = useSelector((state) => state.completed.value);
  
  const dispatch = useDispatch();

  function remove(elem){
    const id = completedTask.indexOf(elem)
    dispatch(completedRemove(id));
  }

  function clear(){
    dispatch(completedCrear());
  }

  console.log(completedTask);
  
  // completedTask.length > 0
 if(completedTask.length > 0){
  return (
    <div>
      <div>
        <p className="completedTask--title">Виконані таски:</p>
      </div>
      <div className="completedTask--flex__wrapper">
        <div className="completedTask--wrapper">
          <div>
            <TiTrash onClick={clear} className="completedTask--clear"/>
          </div>
          <div>
            {completedTask.map((completedTaskElement, index) => (
              <CompletedItem element={completedTaskElement} key={index} remove={remove}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
 }else{
  return (
    <div>
      <div>
        <p className="completedTask--title">Виконані таски:</p>
      </div>
      <div className="completedTask--flex__wrapper">  
        <div className="completedTask--wrapper">
          <div className="noTask">
            <ul>
                <li>Немає виконаних тасків</li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  );
 }
}


import React, {useState} from "react";
import './Task.css'
import { TiDelete } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import FormSubtask from "./FormSubtask/FormSubtask";
// import Subtask from "./Subtask/Subtask";

export default function Task(props) {
  const [visibility, setVisibility] = useState(false);

  const [taskEdit, setTaskEdit] = useState({
    name: props.element.name,
    description: props.element.description
  });

  const [priority, setPriority] = useState(false);

  function activate(){
    props.element.completeTask = true; 
    props.remove();
  }

  function changeVisibility(){
    let a = true;
    setVisibility(a);
  }

  const handleChange = (e)=>{
    const value = e.target.value;
    setTaskEdit({
     ...taskEdit,
     [e.target.name]: value
    });
 }

  function clickEdid(){
    props.element.name = taskEdit.name;
    props.element.description = taskEdit.description;
    setVisibility(false);
    
  }

  function activePriority(){
    props.element.priority = !props.element.priority;
    console.log(props.element.priority);
    let b = !priority; 
    setPriority(b);
  }


  if (!visibility){
    return (
      <div className="grid--wrapper">
        <div className="task">
          <TiStarFullOutline className={priority ? "button--priority__active": "button--priority"}  onClick={activePriority}/>
          <TiDelete onClick={activate} className="button--remove"/>
          <TiPencil onClick={changeVisibility} className="button--edit"/>
          <p className="task--name"> {props.element.name}</p>
          <p className="task--description"> {props.element.description} </p>
       </div>   
       <div  className="sabtask__from--wrapper" >  <FormSubtask subtaskArr={props.element.subtaskArr} /> </div>
       {/* <Subtask className="sabtask--wrapper" subtaskArr={props.element.subtaskArr}/>  */}
      </div>
    );
  }else{
    return (
      <div className="grid--wrapper" >       
          <form>
            <div className="task">
              <TiTick onClick={clickEdid}  className="button--confirm" />
              <TiStarFullOutline className={priority ? "button--priority__active": "button--priority"} onClick={activePriority}/>
              <input type="text" name="name" className="task__name--edit" value={taskEdit.name} onChange={handleChange}/> 
              <textarea name="description" className="task__description--edit" value={taskEdit.description} onChange={handleChange} ></textarea>
            </div>
          </form>
          <div  className="sabtask__from--wrapper" >  <FormSubtask subtaskArr={props.element.subtaskArr} /> </div>
          {/* <Subtask className="sabtask--wrapper" subtaskArr={props.element.subtaskArr}/>  */}
      </div>
    );
  }
}

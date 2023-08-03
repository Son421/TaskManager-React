import React, {useState} from "react";
import './Task.css';
import SabtaskList from "../../SabtaskList/SabtaskList";
import { TiTrash } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { TiTickOutline} from "react-icons/ti";

export default function Task(props) {
  const [visibility, setVisibility] = useState(false);

  const [taskEdit, setTaskEdit] = useState({
    name: props.element.name,
    description: props.element.description
  });

  const [priority, setPriority] = useState(false);

  function activate(){
    props.element.complete = true; 
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
    // треба виправити те що редагування не збeрігається в локалсторедж
  }

  function activePriority(){
    props.element.priority = !props.element.priority;
    console.log(props.element.priority);
    let b = !priority; 
    setPriority(b);
  }

  function addsabtask(sabtask){
    props.element.subtaskArr = sabtask;
    props.addSubtask();
    // !!!
  }
  

  // console.log( props.element.subtaskArr);

  function done(){
    props.element.done = true; 
    props.completeTask();
  }


  if (!visibility){
    return (
      <div className="grid--wrapper">
        <div className="task">
          <TiStarFullOutline className={priority ? "button--priority__active": "button--priority"}  onClick={activePriority}/>
          <TiTrash onClick={activate} className="button--remove"/>
          <TiPencil onClick={changeVisibility} className="button--edit"/>
          <TiTickOutline onClick={done} className="button--done"/>
          <p className="task--name"> {props.element.name}</p>
          <p className="task--description"> {props.element.description} </p>
       </div>   
       <div  className="sabtask--wrapper">
          <SabtaskList element={props.element.subtaskArr} addsabtask={addsabtask}/>
       </div>
      </div>
    );
  }else{
    return (
      <div className="grid--wrapper" >       
          <form>
            <div className="task">
              <TiTick onClick={clickEdid}  className="button--confirm" />
              <TiStarFullOutline className={priority ? "button--priority__active": "button--priority"} onClick={activePriority}/>
              <input type="text"  autoComplete="off" name="name" className="task__name--edit" value={taskEdit.name} onChange={handleChange}/> 
              <textarea name="description" className="task__description--edit" value={taskEdit.description} onChange={handleChange} ></textarea>
            </div>
          </form>
          <div  className="sabtask--wrapper">
            <SabtaskList element={props.element.subtaskArr} addsabtask={addsabtask}/>
          </div>
          
      </div>
    );
  }
}
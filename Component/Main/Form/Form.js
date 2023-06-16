import React, {useState} from "react";
import './Form.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

export default function Form(props) {    
  const [task, setTask] = useState({
    name: '',
    description: '',
    completeTask: false,
    priority: false,
    subtaskArr: []
});

  const [visibility, setVisibility] = useState(false);
  
  function changeVisibility(){
    let a = !visibility
    setVisibility(a);
  }

  const handleChange = (e)=>{
    const value = e.target.value;
    setTask({
     ...task,
     [e.target.name]: value
    });
 }
  

  function addTask(){
    let updated = props.tasks.concat(task);
    props.setTasks(updated);
    setTask({description: '', name: '', completeTask: false, priority: false, subtaskArr: []})
  }

    if(!visibility){
    return (
      <div>
        <button onClick={changeVisibility} className="button--form__visibility"> Створити таску <TiArrowSortedDown/> </button>
      </div>
    )}else{
      return (
        <div>
          <button onClick={changeVisibility} className="button--form__visibility"> Сховати <TiArrowSortedUp/> </button> 
          <form>
            <div className="form-style">
                <li><label>Task name</label>
                <input type="text" name="name" className="field-divided"  value={task.name}  onChange={handleChange} /> </li>
                <li>
                    <label>Task description</label>
                    <textarea name="description" className="field-long field-textarea" value={task.description} onChange={handleChange} ></textarea>
                </li>
                <li>
                    <button className="form--button" type="button" onClick={addTask}> Створити </button> 
                </li>
            </div>
          </form>
        </div>
      );
    }
      
      
}

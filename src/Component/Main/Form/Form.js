import React, {useState} from "react";
import constants from "../../constants";
import './Form.css';
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {shownTaskAdded, addTaskArr, subtaskAdded} from '../../../features/shownTaskSlice'

export default function Form(props) {
  const dispatch = useDispatch();

  const [visibiluty, setVisibility] = useState(false);

  const [taskItem, setTaskItem] = useState({
    name: '',
    description: ''
  });

  let styleVersion = '';
  let styleVersionButton = '';

  switch(props.version) {
    case constants.TaskVersion: 
      styleVersion = 'form-style-4'
      styleVersionButton = 'button--form__visibility'
    break;
    case constants.subtaskVersion: 
      styleVersion = 'form-style-1'
      styleVersionButton = 'button__form__visibility--sabtask'
    break;
    default:
      styleVersion = 'form-style-5'
      styleVersionButton = 'button--form__visibility--TaskList'
  }

  function changeVisibility(){
    let a = !visibiluty
    setVisibility(a);
  }

  const handleChange = (e)=>{
    const value = e.target.value;
    setTaskItem({
     ...taskItem,
     [e.target.name]: value
    });
 }

  function addTaskItem(){
    switch(props.version) {
      case constants.TaskVersion: 
        dispatch(addTaskArr({id: props.id, taskElement: taskItem}));
        setTaskItem({name: '', description: '', priority: false, done: false});
      break;
      case constants.subtaskVersion: 
        dispatch(subtaskAdded({taskId: props.taskId, taskListId: props.taskListId, subtaskItem: taskItem}));
        setTaskItem({name: '', description: '', priority: false, done: false});
      break;
      default:
        dispatch(shownTaskAdded(taskItem));
        setTaskItem({name: '', description: '', priority: false, done: false});
    }
  }
  
  if(!visibiluty){
    return (
      <div>
        <button onClick={changeVisibility} className={styleVersionButton}> Створити {props.version} <TiArrowSortedDown/> </button>
      </div>
    );
  }else{
    return (
      <div>
        <button onClick={changeVisibility} className={styleVersionButton}> Сховати <TiArrowSortedUp/> </button>
        <div>
        <form className={styleVersion}>
          <label>
            <span> {props.version} name</span>
            <input type="text" name="name" autoComplete="off" value={taskItem.name} onChange={handleChange} maxlength="70" required />
          </label>
          <label>
            <span className="visibility"> {props.version} description</span>
            <textarea name="description" value={taskItem.description} onChange={handleChange} maxlength="250" required></textarea>
          </label>
            <button  type="button" onClick={addTaskItem}> Send </button>
        </form>
        </div>
      </div>
    );
  }
}

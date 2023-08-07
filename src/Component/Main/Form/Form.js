import React, {useState} from "react";
import './Form.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


export default function Form(props) {
  const [visibiluty, setVisibility] = useState(false);

  const [emptyInput, setEmptyInput] = useState(false);

  const [taskItem, setTaskItem] = useState({
    name: '',
    description: '',
    complete: false,
    done: false
  // dateCreation
  });

  let styleVersion = '';
  let styleVersionButton = '';

  if(props.version === 'Task'){
    styleVersion = 'form-style-4'
    styleVersionButton = 'button--form__visibility'
  }else if(props.version === 'Subtask'){
    styleVersion = 'form-style-1'
    styleVersionButton = 'button__form__visibility--sabtask'
  }else{
    styleVersion = 'form-style-5'
    styleVersionButton = 'button--form__visibility--TaskList'
  }

  if(emptyInput){
    styleVersion += ' form__error';
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
    if(taskItem.name == ''){
      setEmptyInput(true);
    }else{
      setEmptyInput(false);
      props.addProperty(taskItem);
      let updated = props.taskItems.concat(taskItem);
      props.setTaskItems(updated);
      setTaskItem({description: '', name: '', complete: false, done: false});
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
            <input type="text" name="name" autoComplete="off" value={taskItem.name} onChange={handleChange} />
          </label>
          <label>
            <span className="visibility"> {props.version} description</span>
            <textarea name="description" value={taskItem.description} onChange={handleChange}  ></textarea>
          </label>
            <button  type="button" onClick={addTaskItem}> Send </button>
        </form>
        </div>
      </div>
    );
  }
}

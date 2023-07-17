import React, {useState} from "react";
import './Form.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

// треба додати стан для зміни стилів в залежності чи таск це чи сабтаск

export default function Form(props) {
  const [visibiluty, setVisibility] = useState(false);

  const [taskItem, setTaskItem] = useState({
    name: '',
    description: '',
    complete: false
  // dateCreation
  });

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
    let updated = props.taskItems.concat(taskItem);
    props.setTaskItems(updated);
    setTaskItem({description: '', name: '', complete: false})
  }
  

  if(!visibiluty){
    return (
      <div>
        <button onClick={changeVisibility} className="button--form__visibility"> Створити {} <TiArrowSortedDown/> </button>
      </div>
    );
  }else{
    return (
      <div>
        <button onClick={changeVisibility} className="button--form__visibility"> Сховати <TiArrowSortedUp/> </button>
        <div>
        <form className="form-style-4">
          <label>
            <span>Name</span>
            <input type="text" name="name" value={taskItem.name} onChange={handleChange} />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" value={taskItem.description} onChange={handleChange}  ></textarea>
          </label>
          <label>
            <button type="button" onClick={addTaskItem}> Send </button>
          </label>
        </form>
        </div>
      </div>
    );
  }
}

import React, {useState} from "react";
import TaskList from "../TaskList/TaskList";
import Form from "../Form/Form"
import './ShowTask.css'

export default function ShowTask(props) {
  const [taskItems, setTaskItems] = useState([]);

  function addProperty(elem){
    setTaskItems(elem.version = 'TaskList', elem.taskArr = []);
  }

  function addToTaskArr(arr){
    setTaskItems(taskItems.taskArr = arr)
  }

  function removeTaskList(){
    let removed = taskItems.filter(el => el.complete === false);
    setTaskItems(removed);
  }

  if(taskItems.length > 0){
    return (
      <div>
        <Form version={'TaskList'} taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} /> 
        {taskItems.map((i, index) => (
                    <TaskList element={i} key={index} addToTaskArr={addToTaskArr} removeTaskList={removeTaskList} />
                ))}
      </div>
    );
  }else{
    return(
      <div>
        <Form version={'TaskList'} taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} />
        <div>
        </div>
      </div>
    );
  }
  
}
import React, {useState, useEffect} from "react";
import TaskList from "../TaskList/TaskList";
import Form from "../Form/Form"
import './ShowTask.css'

export default function ShowTask(props) {
  const [taskItems, setTaskItems] = useState([]);

  // localStorage.clear();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('taskItems'));
    if(items){
        setTaskItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskItems', JSON.stringify(taskItems));
  }, [taskItems]);

  function addProperty(elem){
    setTaskItems(elem.version = 'TaskList', elem.taskArr = []);
  }

  function addToTaskArr(){
    setTaskItems(taskItems.slice(0));
  }

  function removeTaskList(){
    let removed = taskItems.filter(el => el.complete === false);
    setTaskItems(removed);
  }

  if(taskItems.length > 0){
    return (
      <div>
        <div>
          <Form version={'TaskList'} taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} /> 
        </div>
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
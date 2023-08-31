import React from "react";
import TaskList from "../TaskList/TaskList";
import Form from "../Form/Form"
import constants from "../../constants";
import {useSelector, useDispatch} from "react-redux";
import {shownTaskRemove} from '../../../features/shownTaskSlice'

export default function ShowTask(props) {  
  const taskList = useSelector((state) => state.shownTask.value);
  
  const dispatch = useDispatch();

  function removeTaskList(item){
    const id = taskList.indexOf(item)
    dispatch(shownTaskRemove(id));
  }

  if(taskList.length > 0){
    return (
      <div>
        <div>
          <Form version={constants.TaskListVersion}/> 
        </div>
        {taskList.map((taskListItem, index) => (
          <TaskList element={taskListItem} key={index} removeTaskList={removeTaskList} />
        ))}
      </div>
    );
  }else{
    return(
      <div>
        <Form version={constants.TaskListVersion}/>
        <div>         
        </div>
      </div>
    );
  }
}
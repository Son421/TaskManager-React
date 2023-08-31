import React, {useState} from "react";
import './Task.css';
import SubtaskList from "../../SubtaskList/SubtaskList";
import {TiTrash,  TiPencil, TiTick, TiStarFullOutline, TiTickOutline} from "react-icons/ti";
import {taskRemove, taskEdit, taskPriority} from '../../../../features/shownTaskSlice';
import {useDispatch,} from "react-redux";
import {completedAdded} from '../../../../features/completedSlice'

export default function Task(props) {

  const dispatch = useDispatch();

  const [visibility, setVisibility] = useState(false);

  const [taskItemEdit, setTaskItemEdit] = useState({
    name: props.element.name,
    description: props.element.description
  });

  function remove(){
    dispatch(taskRemove({taskId: props.taskId, taskListId: props.taskListId}));
  }

  function changeVisibility(){
    setVisibility(true);
  }

  const handleChange = (e)=>{
    const value = e.target.value;
    setTaskItemEdit({
     ...taskItemEdit,
     [e.target.name]: value
    });
 }

  function clickEdid(){
    dispatch(taskEdit({taskListId: props.taskListId, taskId: props.taskId, taskItem: props.element, taskItemEdited: taskItemEdit}));
    setVisibility(false);
  }

  function changePriority(){
    dispatch(taskPriority({taskId: props.taskId, taskListId: props.taskListId, taskItem: props.element}));
  }
 
  function done(){
    dispatch(completedAdded(props.element));
    dispatch(taskRemove({taskId: props.taskId, taskListId: props.taskListId}));
  }

  if (!visibility){
    return (
      <div className="grid--wrapper">
        <div className="task">
          <TiStarFullOutline className={props.element.priority ? "button--priority__active": "button--priority"}  onClick={changePriority}/>
          <TiTrash onClick={remove} className="button--remove"/>
          <TiPencil onClick={changeVisibility} className="button--edit"/>
          <TiTickOutline onClick={done} className="button--done"/>
          <p className="task--name"> {props.element.name}</p>
          <p className="task--description"> {props.element.description} </p>
       </div>   
       <div className="sabtask--wrapper">
          <SubtaskList subtask={props.element.subtaskArr} taskId={props.taskId} taskListId={props.taskListId}/>
       </div>
      </div>
    );
  }else{
    return (
      <div className="grid--wrapper" >       
          <form>
            <div className="task">
              <TiTick onClick={clickEdid}  className="button--confirm" />
              <TiStarFullOutline className={props.element.priority ? "button--priority__active": "button--priority"} onClick={changePriority}/>
              <input type="text"  autoComplete="off" name="name" className="task__name--edit" value={taskItemEdit.name} onChange={handleChange}/> 
              <textarea name="description" className="task__description--edit" value={taskItemEdit.description} onChange={handleChange} ></textarea>
            </div>
          </form>
          <div className="sabtask--wrapper">
            <SubtaskList subtask={props.element.subtaskArr} taskId={props.taskId} taskListId={props.taskListId}/>
          </div>
      </div>
    );
  }
}
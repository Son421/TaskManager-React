import React from "react";
import './TaskList.css'
import Form from "../Form/Form";
import Task from "./Task/Task";
import {TiTrash, TiTickOutline} from "react-icons/ti";
import constants from "../../constants";
import {useSelector, useDispatch} from "react-redux";
import {completedAll} from '../../../features/completedSlice'

export default function TaskList(props) {
    const taskList = useSelector((state) => state.shownTask.value);
    
    const dispatch = useDispatch();

    const id = taskList.indexOf(props.element);

    function removeTaskL(){
        props.removeTaskList(props.element);
    }

    function doneAll(){
        dispatch(completedAll(props.element.taskListArr));
        props.removeTaskList(props.element);
    }
    
    if(props.element.taskListArr.length > 0){   
        return (
            <div className="wrapper">
                <span className="caption"> TaskList {props.element.name} </span>
                <div className="taskList--grid">
                    <div className="taskList--wrapper">
                        {props.element.taskListArr.map((taskItem, index) => (
                            <Task element={taskItem} key={index} taskListId={id} taskId={index}/>
                        ))}
                    </div>
                    <div className="form--grid">
                        <Form version={constants.TaskVersion} id={id}/> 
                    </div>
                </div>
                <div className="butoon-wrapper">
                    <TiTrash onClick={removeTaskL} className="remove--task-l"/>
                    <TiTickOutline onClick={doneAll} className="tick"/>
                </div>
            </div>
        );
    }else{
        return (
            <div className="wrapper">
                <span className="caption" > TaskList {props.element.name} </span> 
                <div className="taskList--grid">   
                    <div className="taskList--wrapper"> 
                        <div className="noTask">
                            <ul>
                                <li>Тасків ще немає</li>
                            </ul>
                        </div>
                    </div>
                    <div className="form--grid">
                        <Form version={constants.TaskVersion} id={id}/> 
                    </div>
                </div>
                <TiTrash onClick={removeTaskL} className="remove--task-l"/>
            </div>
        );
    }
}
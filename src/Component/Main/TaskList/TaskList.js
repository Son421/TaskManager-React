import React, {useState} from "react";
import './TaskList.css'
import Form from "../Form/Form";
import Task from "./Task/Task";
import { TiTrash } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";


export default function TaskList(props) {
    const [taskItems, setTaskItems] = useState([]);

    function addProperty(elem){
        setTaskItems(elem.priority = false, elem.subtaskArr = [], elem.version = 'Task');
    }

    function remove(){
        let removed = taskItems.filter(el => el.complete === false);
        setTaskItems(removed);
    }

    
    function removeTaskL(){
        props.element.complete = true; 
        props.removeTaskList();
    }
    
    if(taskItems.length > 0){   
        return (
            <div className="wrapper">
                <span className="caption"> TaskList {props.element.name} </span>
                <div className="taskList--grid">
                    <div className="taskList--wrapper">
                        {taskItems.map((i, index) => (
                            <Task element={i} key={index} remove={remove} />
                        ))}
                    </div>
                    <div className="form--grid">
                        <Form version={'Task'} taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} /> 
                    </div>
                </div>
                <div className="butoon-wrapper">
                    <TiTrash onClick={removeTaskL} className="remove--task-l"/>
                    <TiTickOutline className="tick"/>
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
                        <Form version={'Task'} taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} /> 
                    </div>
                </div>
                <TiTrash onClick={removeTaskL} className="remove--task-l"/>
            </div>
        );
    }
}
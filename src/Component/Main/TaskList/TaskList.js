import React, {useState, useEffect} from "react";
import './TaskList.css'
import Form from "../Form/Form";
import Task from "./Task/Task";
import { TiTrash } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";


export default function TaskList(props) {
    const [taskItems, setTaskItems] = useState([]);

    const [completedTaskItem, setCompletedTaskItem] = useState([]);

    let localStWrapper = 0; 

    useEffect(() => {
        setTaskItems(props.element.taskArr);
    }, []);

    useEffect(() => {
        completed();
    }, [props, localStWrapper]);

    useEffect(() => {
        addTask();
    }, [taskItems]);

    useEffect(() => {
        if(completedTaskItem.length !== 0){
            localStorage.setItem('completedTaskItem', JSON.stringify(completedTaskItem));
            localStWrapper++;
        }
    }, [completedTaskItem]);

    function completeTask(){
        let completed = taskItems.find(el => el.done === true);
        let up = completedTaskItem.concat(completed);
        setCompletedTaskItem(up);
        let removed = taskItems.filter(el => el.done === false);
        setTaskItems(removed);
    }

    function addProperty(elem){
        setTaskItems(elem.priority = false, elem.subtaskArr = [], elem.version = 'Task', elem.taskListIs = props.element.name);
    }

    function remove(){
        let removed = taskItems.filter(el => el.complete === false);
        setTaskItems(removed);
    }

    function removeTaskL(){
        props.element.complete = true; 
        props.removeTaskList();
    }

    function addTask(){
        props.element.taskArr = taskItems;
        props.addToTaskArr();
    }

    function addSubtask(){
        setTaskItems(taskItems.slice(0));
    }

    function completed(){
        let items = JSON.parse(localStorage.getItem('completedTaskItem'));
        setCompletedTaskItem(items);
    }

    if( taskItems.length > 0){   
        return (
            <div className="wrapper">
                <span className="caption"> TaskList {props.element.name} </span>
                <div className="taskList--grid">
                    <div className="taskList--wrapper">
                        { taskItems.map((i, index) => (
                            <Task element={i} key={index} remove={remove} completeTask={completeTask} addSubtask={addSubtask} />
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
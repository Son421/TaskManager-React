import React, {useState} from "react";
import './TaskList.css'
import Task from "./Task/Task";
import Form from "../Form/Form";


export default function TaskList(props) {     
    const [tasks, setTasks] = useState([{
    name: 'poop',
    description: 'choop',
    completeTask: false,
    priority: false,
    subtaskArr: [{ 
        name: 'poopSub1',
        description: 'jddlkjgs',
        completeSubtask: false},
        { 
        name: 'poopSub2',
        description: 'jddlsdgkjgs',
        completeSubtask: false}]
    },
    {   
    name: 'poop2',
    description: 'choop2',
    completeTask: false,
    priority: false,
    subtaskArr: []
    }
    ]);

    function remove(){
        let removed = tasks.filter(el => el.completeTask === false);
        setTasks(removed);
    }

    if(tasks.length > 0){   
        return (
            <div>
                <Form tasks={tasks} setTasks={setTasks}/> 
                <div className="taskList--wrapper">
                    {tasks.map((i, index) => (
                        <Task element={i} key={index} remove={remove}/>
                    ))}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <Form tasks={tasks} setTasks={setTasks}/> 
                <div className="noTask">
                    <ul>
                        <li>Тасків ще немає</li>
                    </ul>
                </div>
            </div>
        );
    }
}

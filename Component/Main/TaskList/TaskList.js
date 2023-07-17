import React, {useState} from "react";
import Form from "../Form/Form";

export default function TaskList(props) {
    const [taskItems, setTaskItems] = useState([]);

    function addProperty(){
        taskItems.map((i, index) => (
            i.priority = false,
            i.subtaskArr = []
        ))
    }

 if(tasks.length > 0){   
    return (
        <div>
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty}/> 
            <div className="taskList--wrapper">
                {/* {tasks.map((i, index) => (
                    <Task element={i} key={index} remove={remove}/>
                ))} */}
            </div>
        </div>
    );
}else{
    return (
        <div>
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty}/> 
            <div className="noTask">
                <ul>
                    <li>Тасків ще немає</li>
                </ul>
            </div>
        </div>
    );
}
}
import React, {useState} from "react";
import Form from "../Form/Form";

export default function SabtaskList(props) {
    const [taskItems, setTaskItems] = useState([]);

  return (
    <div>
        <Form taskItems={taskItems} setTaskItems={setTaskItems}/> 
    </div>
  );
}


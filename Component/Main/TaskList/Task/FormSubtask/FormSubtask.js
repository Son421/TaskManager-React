import React, {useState} from "react";
import './FormSubtask.css'
import { TiPlus } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";


export default function FormSubtask(props) {
    const [subtask, setSubtask] = useState({
        name: '',
        description: '',
        completeSubtask: false
    });

    const [visibility, setVisibility] = useState(false);

    const handleChange = (e)=>{
        const value = e.target.value;
        setSubtask({
         ...subtask,
         [e.target.name]: value
        });
     }
      
  
    function addSubtask(){
        props.subtaskArr.push(subtask);
        setSubtask({name: '', description: '',  completeSubtask: false});
    }

    function changeVisibility(){
        let a = !visibility;
        setVisibility(a);
    }


    if(!visibility){
        return(
            <div>
                <button onClick={changeVisibility} className="button--visibility" > <TiPlus/>  Додати сабтаск </button>
            </div>
        );
    }else{
        return (
            <div>
            <form>
                    <div className="subtask__form--wrapper" >
                        <TiTimes className="clouse--button" onClick={changeVisibility}/>
                        <li><label>Subtask name</label>
                        <input type="text" name="name" className="subtask__form--input"  value={subtask.name}  onChange={handleChange} /> </li>
                        <li> <label>Subtask description</label>
                        <textarea name="description" className="subtask__form--textarea" value={subtask.description} onChange={handleChange} ></textarea></li>
                        <li><button className="subtask__form--button" type="button" onClick={addSubtask}> Додати </button> </li>
                    </div>
            </form>
            </div>
        );
    }
}
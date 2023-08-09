import React, {useState, useEffect} from "react";
import './SabtaskList.css';
import Form from "../Form/Form";
import Sabtask from "./Sabtask/Sabtask";
import Constant from "../../Constant";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";

export default function SabtaskList(props) {
  const [taskItems, setTaskItems] = useState([]);

  const [visibiluty, setVisibility] = useState(false);

  const [elements, setElemets] = useState({elementName: '', elementDescription: '', 
  elementHiddenStyle: 'sabtask--block__hidden', elementIndex: 0, elementDone: false});

  useEffect(() => {
    setTaskItems(props.element);
  }, []);

  useEffect(() => {
    addSub();
  }, [taskItems]);

  function changeVisibility(){
    setVisibility(!visibiluty);
  }

  function addProperty(elem){
    setTaskItems(elem.version = Constant.subtaskVersion);
  }

  function sabtaskBlock(elemN, elemD, index){
    setElemets({elementName: elemN, elementIndex: index,  elementDescription: elemD, elementHiddenStyle: "sabtask--block", elementDone: taskItems[index].done});
  }

  function clouseElemnet(){
    setElemets({elementHiddenStyle: 'sabtask--block__hidden'});
  }

  function addSub(){
    props.addsabtask(taskItems);
  }

  function remove(){
    taskItems[elements.elementIndex].complete = true;
    let removed = taskItems.filter(el => el.complete === false);
    setTaskItems(removed);
    setElemets({elementHiddenStyle: 'sabtask--block__hidden'});
  }

  function done(){
    taskItems[elements.elementIndex].done = true;
    setTaskItems(taskItems.slice(0));
    sabtaskBlock(elements.elementName, elements.elementDescription, elements.elementIndex);
  }

  if(taskItems.length > 0){
    if(!visibiluty){
      return (
        <div className="sabtasklist--grid__wrapper">
          <div>
            <button className="button--sabtask__clouse" onClick={changeVisibility}> Subtask <TiArrowSortedDown/> </button>
          </div>
          <div className="form--wrapper">
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} version={Constant.subtaskVersion}/> 
          </div>
          <div className="sabtask--block__wrapper">
            <div className={elements.elementHiddenStyle}>
              <TiTimes className="button__roll--up" onClick={clouseElemnet}/>
              <p className={elements.elementDone ? "sabtask--name__done": "sabtask--name" }> {elements.elementName} </p>
              <p className={elements.elementDone ? "sabtask--description__done":  "sabtask--description"}> {elements.elementDescription} </p>
              <TiTickOutline onClick={done} className={elements.elementDone ? "hidden" : "sabtasklist__tick--button"}/>
              <TiTrash  onClick={remove} className={elements.elementDone ? "hidden" :"sabtasklist__trash--button"} />
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div className="sabtasklist--grid__wrapper">  
          <div>
            <button className="button--sabtask__open" onClick={changeVisibility}> Subtask <TiArrowSortedUp/> </button>
            {taskItems.map((i, index) => (
              <Sabtask element={i} key={index} id={index} sabtaskBlock={sabtaskBlock}/>
            ))}
          </div>
          <div className="form--wrapper">
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} version={Constant.subtaskVersion}/> 
          </div>
          <div className="sabtask--block__wrapper">
            <div className={elements.elementHiddenStyle}>
              <TiTimes className="button__roll--up" onClick={clouseElemnet}/>
              <p className={elements.elementDone ? "sabtask--name__done":  "sabtask--name"}> {elements.elementName} </p>
              <p className={elements.elementDone ? "sabtask--description__done":  "sabtask--description"}> {elements.elementDescription} </p>
              <TiTickOutline onClick={done} className={elements.elementDone ? "hidden" : "sabtasklist__tick--button"}/>
              <TiTrash  onClick={remove} className={elements.elementDone ? "hidden" :"sabtasklist__trash--button"} />
            </div>
          </div>
        </div>
      );
    }
    // length 0;
  }else{
    if(!visibiluty){
      return (
        <div  className="sabtasklist--grid__wrapper">
          <div>
            <button className="button--sabtask__clouse" onClick={changeVisibility}> Subtask <TiArrowSortedDown/> </button>
          </div>
          <div className="form--wrapper">
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} version={Constant.subtaskVersion}/> 
          </div>
        </div>
      );
    }else{
      return (
        <div  className="sabtasklist--grid__wrapper">
          <div>
            <button className="button--sabtask__open" onClick={changeVisibility}> Subtask <TiArrowSortedUp/> </button>
            <div className="no__sabtask"> Сабтасків немає </div>
          </div>
          <div className="form--wrapper">
            <Form taskItems={taskItems} setTaskItems={setTaskItems} addProperty={addProperty} version={Constant.subtaskVersion}/> 
          </div>
        </div>
      );
    }
  }
}
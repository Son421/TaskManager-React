import React, {useState} from "react";
import './SabtaskList.css';
import Form from "../Form/Form";
import Subtask from "./Subtask/Subtask";
import constants from "../../constants";
import {TiArrowSortedDown, TiArrowSortedUp, TiTimes, TiTickOutline, TiTrash} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {subtaskRemove, subtaskDone} from "../../../features/shownTaskSlice";

export default function SubtaskList(props) {
  const dispatch = useDispatch();

  const [visibiluty, setVisibility] = useState(false);

  const [elements, setElemets] = useState({elementName: '', elementDescription: '', 
  elementHiddenStyle: 'sabtask--block__hidden', elementIndex: 0, elementDone: false});

  function changeVisibility(){
    setVisibility(!visibiluty);
  }

  function sabtaskBlock(elemN, elemD, index){
    setElemets({elementName: elemN, elementIndex: index, elementDescription: elemD, elementHiddenStyle: "sabtask--block", elementDone: props.subtask[index].done});
  }

  function clouseElemnet(){
    setElemets({elementHiddenStyle: 'sabtask--block__hidden'});
  }

  function remove(){
    dispatch(subtaskRemove({taskId: props.taskId, taskListId: props.taskListId, subtaskId: elements.elementIndex}));
    setElemets({elementHiddenStyle: 'sabtask--block__hidden'});
  }

  function done(){
    dispatch(subtaskDone({taskId: props.taskId, taskListId: props.taskListId, subtaskId: elements.elementIndex}));
    setElemets({elementName: elements.elementName, elementDescription: elements.elementDescription, 
    elementHiddenStyle: "sabtask--block", elementIndex: elements.elementIndex, elementDone: true});
  }

  if(props.subtask.length > 0){
    if(!visibiluty){
      return (
        <div className="sabtasklist--grid__wrapper">
          <div>
            <button className="button--sabtask__clouse" onClick={changeVisibility}> Subtask <TiArrowSortedDown/> </button>
          </div>
          <div className="form--wrapper">
            <Form version={constants.subtaskVersion} taskId={props.taskId} taskListId={props.taskListId}/> 
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
            {props.subtask.map((i, index) => (
              <Subtask element={i} key={index} id={index} sabtaskBlock={sabtaskBlock}/>
            ))}
          </div>
          <div className="form--wrapper">
            <Form version={constants.subtaskVersion} taskId={props.taskId} taskListId={props.taskListId}/> 
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
            <Form version={constants.subtaskVersion} taskId={props.taskId} taskListId={props.taskListId}/> 
          </div>
        </div>
      );
    }else{
      return (
        <div className="sabtasklist--grid__wrapper">
          <div>
            <button className="button--sabtask__open" onClick={changeVisibility}> Subtask <TiArrowSortedUp/> </button>
            <div className="no__sabtask"> Сабтасків немає </div>
          </div>
          <div className="form--wrapper">
            <Form version={constants.subtaskVersion} taskId={props.taskId} taskListId={props.taskListId}/> 
          </div>
        </div>
      );
    }
  }
}
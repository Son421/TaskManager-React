import React, {useState, useEffect} from "react";
import './CompletedTask.css'
import CompletedItem from "./CompletedItem/CompletedItem";
import { TiTrash } from "react-icons/ti";


export default function CompletedTask(props) {
  const [completedTaskItem, setCompletedTaskItem] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('completedTaskItem'));
    if(items){
      setCompletedTaskItem(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedTaskItem', JSON.stringify(completedTaskItem));
  }, [completedTaskItem]);

  function remove(){
    let removed = completedTaskItem.filter(el => el.complete === false);
    setCompletedTaskItem(removed);
  }

  function clear(){
    setCompletedTaskItem([]);
  }

 if(completedTaskItem.length > 0){
  return (
    <div>
      <div>
        <p className="completedTask--title">Виконані таски:</p>
      </div>
      <div className="completedTask--flex__wrapper">
        <div className="completedTask--wrapper">
          <div>
            <TiTrash onClick={clear} className="completedTask--clear"/>
          </div>
          <div>
            {completedTaskItem.map((i, index) => (
              <CompletedItem element={i} key={index} remove={remove}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
 }else{
  return (
    <div>
      <div>
        <p className="completedTask--title">Виконані таски:</p>
      </div>
      <div className="completedTask--flex__wrapper">  
        <div className="completedTask--wrapper">
          <div className="noTask">
            <ul>
                <li>Немає виконаних тасків</li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  );
 }
  
}


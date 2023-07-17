import React from "react";
import './Header.css'

export default function Header(props) {

  function showTasks(){
    props.showCompletedTasks();
  }

  return (
    <div>
      <header className="header--wrapper">
        <div className="header__line">
          <div className="header__logo" >PUPA</div>         
          <div className="header__complete--task">
            <div onClick={showTasks} className="header__complete--button">Completed tasks</div> 
          </div>        
        </div>
      </header>
    </div>
  );
}

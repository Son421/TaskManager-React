import React from "react";
import { useDispatch } from "react-redux";
import { showUp } from "../../features/showCompletedSlice";
import './Header.css'

export default function Header(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <header className="header--wrapper">
        <div className="header__line">
          <div className="header__logo" >PUPA</div>         
          <div className="header__complete--task">
            <div onClick={() => dispatch(showUp())} className="header__complete--button">Completed tasks</div> 
          </div>        
        </div>
      </header>
    </div>
  );
}

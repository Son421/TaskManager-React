import React from "react";
import './Header.css'

export default function Header(props) {
  return (
    <div className="header--wrapper">
      <header>
        <div className="header__line">
          <div className="header__logo" >PUPA</div>
          <nav>
              <ul className="header__nav">
                {/* <li> 1</li>
                <li> 2</li> */}
                  {/*навігація по суйту*/}
              </ul>
          </nav>        
        </div>
      </header>
    </div>
  );
}

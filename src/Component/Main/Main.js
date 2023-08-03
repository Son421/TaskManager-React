import React from "react";
import './Main.css'
import ShowTask from "./ShownTask/ShowTask";
import CompletedTask from "./CompletedTask/CompletedTask";

export default function Main(props) {

  
// ?????
  if(!props.shownCompleted){
    return (
      <div>
       <ShowTask/>
      </div>
    );
  }else{
    return (
      <div>
       <CompletedTask/>
      </div>
    );
  }
  
}

  // ???
  // return(
  //   <div>
  //     <div>
  //       <ShowTask/>
  //     </div>
  //   </div>
  // );
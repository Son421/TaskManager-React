import React from "react";
import ShowTask from "./ShownTask/ShowTask";
import CompletedTask from "./CompletedTask/CompletedTask";
import {useSelector} from "react-redux";

export default function Main(props) {
const value = useSelector((state) => state.showUp.value);
  
  if(value){
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

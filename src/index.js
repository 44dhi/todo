import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todolist from './todolist'
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Todolist />
    </div>,
    destination
);
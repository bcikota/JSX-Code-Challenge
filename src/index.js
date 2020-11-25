//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(
  <div>
    <h1>To Do List</h1>
    <ul>
      <li>Buy food</li>
      <li>Cook food</li>
      <li>Eat food</li>
    </ul>
  </div>,
  document.querySelector("#root")
);

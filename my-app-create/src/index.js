/* 
------------ Some notes about Components in React.JS -------------
    - Think of component? Think of function.

    - To create components in React, we need to create JS functions.

    - We must name a function with a capital letter.

    - When we create a function, we also need to export it.

    - Which essentially makes the component and we can grab it anywhere and render it.

    - This did not work on vite.

    - We are gonna use rafce - arrow functions with export and rfce - regular functions with export.

    - In the long run, React.createElement is worse and more confusing than writing html in return.
*/
import React from "react";
import ReactDOM from "react-dom/client";

/* First Component 
const Greetings = () => {
  return <h2> This is the first component</h2>;
};
export default Greetings;
*/

/* Second component using jsx
const Greetings = () => {
  return React.createElement("h2", {}, "Second Component");
};
*/

/*
const Greetings = () => {
  return (
    <div>
      <h2>My Third Component</h2>
    </div>
  );
};
export default Greetings;
*/

const Greetings = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Fourth Component")
  );
};

export default Greetings;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Greetings />);

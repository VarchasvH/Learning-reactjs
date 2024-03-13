/* 
 Some notes about Components in React.JS

 - To create components in React, we need to create JS functions.

 - Think of component? Think of function.

 - We must name a function with a capital letter.

 - When we create a function, we also need to export it.

 -  Which essentially makes the component and we can grab it anywhere and render it.
*/
import React from 'react'
import ReactDOM  from 'react-dom/client';

const Greetings = () => {
    return <h2> This is the first component</h2>;
}
export default Greetings;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greetings />)
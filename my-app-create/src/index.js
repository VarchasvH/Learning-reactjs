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

function Greetings() {
  return (
    <>
      <div>
        <h3>
          <ul>
            <li>
              <a href="https://google.com">hello-world</a>
            </li>
          </ul>
        </h3>
      </div>
    </>
  );
}

export default Greetings;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Greetings />);

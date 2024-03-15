import { useState } from "react";
import "./App.css";

function App() {
  // Wherever counter is written, it will be updated. That's react.
  let [counter, setCounter] = useState(5);
  //let counter = 5; This variable will get updated but it won't update the UI.
  const increaseValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      /* Interview Question:-
      If we write them more times than needed, it will still return only +1.
      They are sent as a batch and they do the same thing.
      setCounter(counter);
      setCounter(counter);
      setCounter(counter);

      To Do the same we need to do:
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      */
    } else {
      alert("You've reached the maximum number of clicks!");
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      alert("You've reached the minimum number of clicks!");
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button type="button" onClick={increaseValue}>
        Increase value
      </button>
      <button type="button" onClick={decreaseValue}>
        Decrease value
      </button>
    </>
  );
}

export default App;

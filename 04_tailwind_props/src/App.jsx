// import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      {/* Add some props to a card */}
      <Card
        cardName="Abhishek Shintre"
        bio="Photographer"
        btnText="Hire me"
        imgsrc="https://images.unsplash.com/photo-1645188723920-336fac2f505e?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        cardName="Raamin ka"
        bio="Lawyer"
        btnText="Contact Me"
        imgsrc="https://images.unsplash.com/photo-1601574465779-76d6dbb88557?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card />
    </>
  );
}

export default App;

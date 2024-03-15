import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-2xl"
            style={{ backgroundColor: "#767676" }}
          >
            <button
              onClick={() => setColor("#50C878")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "#50C878" }}
            >
              Emerald
            </button>
            <button
              onClick={() => setColor("#00ffef")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "#00ffef" }}
            >
              Turqoise
            </button>
            <button
              onClick={() => setColor("#967bb6")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "#967bb6" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("#e4717a")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-large"
              style={{ backgroundColor: "#e4717a" }}
            >
              Candy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

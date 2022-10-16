import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.xa.value);
    console.log(e.target.xb.value);
    console.log(e.target.xd.value);
  };

  return (
    <div className="bg-gray-200 h-screen w-screen">
      <section className="flex items-center justify-center gap-y-6 flex-col">
        <h1 className="text-3xl font-bold underline ">Reactor app</h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center justify-center gap-x-4 flex-col gap-y-8"
        >
          <section className="flex items-center justify-between">
            <input
              className="border-2 border-black rounded-full text-center"
              type="number"
              name="xa"
              placeholder="xa"
              min={0}
            ></input>
            <input
              className="border-2 border-black rounded-full text-center"
              type="number"
              name="xb"
              placeholder="xb"
              min={0}
            ></input>
            <input
              className="border-2 border-black rounded-full text-center"
              type="number"
              name="xd"
              placeholder="xd"
              min={0}
            ></input>
          </section>

          <button
            type="submit"
            className="w-[300px] rounded-xl text-lg text-center bg-blue-400"
          >
            {" "}
            Send Values
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;

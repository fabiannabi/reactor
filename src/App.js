import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      tipo: e.target.tipo.value,
      xa: e.target.xa.value,
      xb: e.target.xb.value,
      xd: e.target.xd.value,
    });
  };

  const startRun = () => {
    // do something
    // exponential base 10 5*Math.pow(10, -1)
  };
  console.log(values);

  return (
    <div className="bg-gray-200 h-screen w-screen">
      <section className="flex items-center justify-center gap-y-6 flex-col">
        <h1 className="text-3xl font-bold underline ">Reactor app</h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center justify-center gap-x-4 flex-col gap-y-8"
        >
          {" "}
          <h1> Tipo de ecuacion</h1>
          <section className="flex items-center justify-center flex-col gap-2">
            <section className="flex items-center justify-around gap-x-2">
              <p>0:</p>
              <p>1 reactivo 1 producto</p>
            </section>

            <section className="flex items-center justify-around gap-x-2">
              <p>1:</p>
              <p>1 reactivo 2 producto</p>
            </section>
            <section className="flex items-center justify-around gap-x-2">
              <p>2:</p>
              <p>2 reactivo 1 producto</p>
            </section>
            <section className="flex items-center justify-around gap-x-2">
              <p>3:</p>
              <p>2 reactivo 2 producto</p>
            </section>

            <input
              className="border-2 border-black rounded-full text-center"
              type="number"
              name="tipo"
              placeholder="tipo de ecuacion"
              min={0}
              max={3}
            ></input>
          </section>
          <h1> valores iniciales</h1>
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
            Set initial Values
          </button>
        </form>
      </section>
      <section className="flex items-center justify-center pt-6">
        <button
          onClick={startRun}
          className="bg-green-500 w-[300px] rounded-xl text-lg text-center"
        >
          Start Run
        </button>
      </section>
    </div>
  );
}

export default App;

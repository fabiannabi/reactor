import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <section className="flex items-center justify-center gap-y-6 flex-col">
        <h1 class="text-3xl font-bold underline ">Reactor app</h1>

        <form className="flex items-center justify-center gap-x-4 flex-col gap-y-8">
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
              placeholder="xc"
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

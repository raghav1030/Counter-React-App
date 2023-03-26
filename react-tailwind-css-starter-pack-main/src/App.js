import "./App.css";
import { useState } from "react";

function App() {

  

  const [count , setCount] = useState(0);

  function decreaseHandler(){
    setCount(count - 1)
  }

  function increaseHandler(){
    setCount(count+1)
  }

  function resetHandler(){
    setCount(0)
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] flex justify-center items-center flex-col gap-10  " >
      <div className="text-[#0398d4] font-medium  text-2xl ">Increment & Decrement</div>

      <div className="flex justify-center bg-white gap-12 py-3 rounded-sm text-[#344151] text-[25px] " >
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl  " >-</button>

        <span className="font-bold gap-12 text-5xl ">{count}</span>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl  ">+</button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398df] text-white px-5 py-2 rounded-sm  text-lg " >Reset</button>
    </div>
  );
}

export default App;

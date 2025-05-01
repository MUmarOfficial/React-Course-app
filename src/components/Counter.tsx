import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue(counterValue + 1);
  };
  const decrement = () => {
    setCounterValue(counterValue - 1);
    if (counterValue - 1 < 0) {
      setCounterValue(0);
    }
  };
  const reset = () => {
    setCounterValue(0);
  };

  return (
    <section className=" flex flex-col justify-center items-center gap-6 px-36 py-20 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-semibold">Count is </h1>
        <p className="text-2xl">{counterValue}</p>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={decrement}>- Decrement</button>
        <button onClick={increment}>+ Increment</button>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;

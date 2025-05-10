import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const StartCounter = () => {
    const timer = setInterval(() => {
      setCounterValue((counterValue) => {
        return counterValue + 1;
      });
    }, 1000);
    return timer;
  };
  const StopCounter = () => {
    setCounterValue(counterValue - 1);
    if (counterValue - 1 < 0) {
      setCounterValue(0);
    }
  };
  const ResetCounter = () => {
    setCounterValue(0);
  };

  useEffect(() => {
    // mount
    const timer = StartCounter();
    return () => {
      // unmount
      clearInterval(timer);
    };
  }, []);

  return (
    <section className=" flex flex-col justify-center items-center gap-6 size-2xl  px-36 py-20 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-semibold">Count is </h1>
        <p className="text-xl">{counterValue}</p>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={StopCounter}>- StopCounter</button>
        <button onClick={StartCounter}>+ StartCounter</button>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={ResetCounter}>Reset</button>
      </div>
    </section>
  );
};

export default AutoCounter;

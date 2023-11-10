import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(result.concat(e.currentTarget.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded shadow-2xl w-96">
        <div className="mb-5">
          <input type="text" className="calculator-screen w-full h-20 text-4xl bg-gray-100 rounded p-3 text-right" value={result} disabled />
        </div>
        <div className="grid grid-cols-4 gap-5">
          {/* Existing buttons */}
          <button name="%" onClick={handleClick} className="col-span-1 bg-gray-200 h-20 rounded text-2xl">%</button>
          <button name="**" onClick={handleClick} className="col-span-1 bg-gray-200 h-20 rounded text-2xl">^</button>
          <button onClick={() => setResult(Math.sqrt(parseFloat(result)).toString())} className="col-span-1 bg-gray-200 h-20 rounded text-2xl">√</button>
          <button onClick={clear} className="col-span-4 bg-red-500 h-20 rounded text-2xl text-white">Clear</button>
          {/* New button for exponential operation */}
          <button name="**" onClick={handleClick} className="col-span-1 bg-gray-200 h-20 rounded text-2xl">Exp</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        เครื่องคิดเลข
      </h1>
      <input
        type="text"
        className="w-full text-right bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-3xl p-4 rounded-md mb-4"
        value={result}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-2 bg-red-500 text-white font-bold text-xl py-4 rounded-md hover:bg-red-600 transition-colors duration-300"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-gray-400 dark:bg-gray-600 text-white font-bold text-xl py-4 rounded-md hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors duration-300"
          onClick={handleBackspace}
        >
          C
        </button>
        <button
          className="bg-blue-500 text-white font-bold text-xl py-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          name="/"
          onClick={handleClick}
        >
          &divide;
        </button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="7" onClick={handleClick}>7</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="8" onClick={handleClick}>8</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="9" onClick={handleClick}>9</button>
        <button className="bg-blue-500 text-white font-bold text-xl py-4 rounded-md hover:bg-blue-600 transition-colors duration-300" name="*" onClick={handleClick}>&times;</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="4" onClick={handleClick}>4</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="5" onClick={handleClick}>5</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="6" onClick={handleClick}>6</button>
        <button className="bg-blue-500 text-white font-bold text-xl py-4 rounded-md hover:bg-blue-600 transition-colors duration-300" name="-" onClick={handleClick}>&ndash;</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="1" onClick={handleClick}>1</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="2" onClick={handleClick}>2</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="3" onClick={handleClick}>3</button>
        <button className="bg-blue-500 text-white font-bold text-xl py-4 rounded-md hover:bg-blue-600 transition-colors duration-300" name="+" onClick={handleClick}>+</button>
        <button className="col-span-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="0" onClick={handleClick}>0</button>
        <button className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl py-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300" name="." onClick={handleClick}>.</button>
        <button
          className="bg-green-500 text-white font-bold text-xl py-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
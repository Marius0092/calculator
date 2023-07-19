import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = value => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
  };

  return (
    <div className='App'>
      <h1>Calculator</h1>
      <div className='display'>{display}</div>
      <div className='buttons'>
        <div className='row'>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className='row'>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className='row'>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className='row'>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className='row'>
          <button className='clear' onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

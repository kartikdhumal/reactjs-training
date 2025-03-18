import { useState } from 'react'
import Count from './Components/Count';
import Button from './Components/Button';
import './styles/home.scss'

function App() {
  const [count, setCount] = useState(null);
  const [isGiven, setIsGiven] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function increamentHandler() {
    setCount(count + 1);
  }

  function decreamentHandler() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function initialNumber() {
    if (Number(inputValue) === 0) {
      alert("Please enter positive value");
      setInputValue("");
      return;
    }
    setCount(Number(inputValue));
    setIsGiven(true);
  }

  function handleResetCounts() {
    setIsGiven(false);
    setCount(0);
    setInputValue("");
  }

  return (
    <div className='container'>
      {
        !isGiven && <><input type='number' className='input' min={0} value={inputValue} onChange={(e) => setInputValue(e.target.value)} required></input>
          <Button label={"Add Initial Number"} handler={initialNumber} /></>
      }
      {
        isGiven && <>
          <div className='operation'>
            <Button label={"-"} handler={decreamentHandler} />
            <Count count={count}></Count>
            <Button label={"+"} handler={increamentHandler} />
          </div>
          <Button label={"Reset"} handler={handleResetCounts} />
        </>
      }
    </div>
  )
}

export default App

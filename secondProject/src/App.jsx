import { useState } from 'react'
import Button from './Components/Button';
import Count from './Components/Count';
import './styles/main.scss'

function App() {
  const [count, setCount] = useState(0)

  function increamentHandler() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className='container'>
      <Count count={count} />
      <Button label={"INC"} handler={increamentHandler} />
    </div>
  )
}

export default App

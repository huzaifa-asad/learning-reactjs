import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log("value added", counter);
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    console.log("value removed", counter);
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>The Final value of counter is: {counter}</p>
    </>
  )
}

export default App

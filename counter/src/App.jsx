import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(10)

const addvalue = ()=>{
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  console.log("Clicked", counter)
}
const removevalue = () =>{
  setCounter(counter-1)
  setCounter(counter-1)
  setCounter(counter-1)
  setCounter(counter-1)
  setCounter(counter-1)
}
  return (
    <>
      <h1>React WIth Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
    </>
  )
}

export default App

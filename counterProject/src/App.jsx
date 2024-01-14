import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  // let counter = 15
  const addValue = ()=>{
    counter = counter + 1;
    if (counter > 20){
      counter = 0;
      alert("more then twenty not allowed")
    }
    setCounter(counter)
    console.log("value added ",counter);
  }

  const removeValue = ()=>{
    counter = counter - 1;
    if(counter < 1){
      alert("negative values not allowed");
      counter = 0;
    }
    setCounter(counter)
    console.log("value removed" , counter);
  }

  return (
    <>
    <h1>hii Rajat !</h1>

    <h2>counter value : {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <pre>

    </pre>
    <button 
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App

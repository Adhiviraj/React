import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

  const addvalue = () => {
    if(counter + 1 < 21){
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const decreaseValue = () => {
    if(counter - 1 >= 0){
      setCounter(counter - 1);
    }
  }

  return (
    <> 
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>
    <br/>
     <button onClick={addvalue}>Add value</button>
     <button onClick={decreaseValue}>remove value</button>
    </>
  )
}

export default App

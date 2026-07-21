import { useCallback, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[CharAllowed, setCharaterAllowed] = useState(false);

  const[password, setPassword] = useState("")

  const passwordGenerater = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789"
    if(CharAllowed) str += "~!@#$%^&*()_+{}|`"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    
    setPassword(pass)

  },[length,numberAllowed,CharAllowed,setPassword])

  return (
    <>
      <div className='w-full max-w-125 mx-auto shadow-md rounded-lg px-4 my-30 bg-gray-700'>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4 "'>
          <h1 className='text-center  text-orange-500'>Password generator</h1>
          <input 
          type='text'
          value={password}
          className='outline-none w-90 py-1 px-3 my-2 mb-5 bg-gray-300 hover:bg-gray-400'
          placeholder='password'
          readOnly
          />

          <button className='out-line-none bg-blue-700 text-white mx-2 px-3 py-0.5 shrink-0 hover:bg-blue-800'>copy</button>
        </div>
      <div className='flex text-15x gap-x-2 p-2'>
        <div className='flex items-center gap-x-1 pr whitespace-nowrap'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
            className = 'cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
            <label>length: {length}</label>
        </div>
        <div className='flex p-1 items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
           />
          <label htmlFor='numberInput'>Numbers</label> 
        </div>

        <div className='flex items-center gap-x-1'>
          <input
              type='checkbox'
              defaultChecked={CharAllowed}
              id="CharaterInput"
              onChange={() =>{
                setCharaterAllowed((prev) => !prev);
              }}
          />
          <label htmlFor='characterInput'>Charaters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

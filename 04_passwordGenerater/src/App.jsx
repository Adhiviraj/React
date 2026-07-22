import { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false); // Added state for copy feedback

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+{}|`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // Use the actual password length instead of a hardcoded 20
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    
    // Show visual feedback
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl px-6 py-8 bg-gray-800 border border-gray-700">
        
        <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">
          Password <span className="text-blue-500">Generator</span>
        </h1>
        
        {/* Input & Copy Button */}
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-8 border border-gray-600 focus-within:border-blue-500 transition-colors">
          <input 
            type="text"
            value={password}
            className="flex-1 outline-none py-3 px-4 bg-gray-700 text-white font-mono text-lg tracking-wider placeholder-gray-400"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className={`outline-none px-5 py-3 font-semibold shrink-0 transition-all duration-200 active:scale-95 flex items-center justify-center min-w-[90px]
              ${isCopied 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-y-6 text-sm font-medium text-gray-300">
          
          {/* Slider */}
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="length-slider">Password Length</label>
              <span className="text-blue-400 text-lg font-bold bg-gray-900 px-3 py-1 rounded-md">
                {length}
              </span>
            </div>
            <input 
              id="length-slider"
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          
          {/* Checkboxes */}
          <div className="flex gap-x-6 pt-2 border-t border-gray-700">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <input 
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="cursor-pointer select-none hover:text-white transition-colors">
                Numbers
              </label> 
            </div>

            <div className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="cursor-pointer select-none hover:text-white transition-colors">
                Characters
              </label>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
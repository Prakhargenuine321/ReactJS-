import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  //for tracking length used "useState()" hook.
  const [length, setLength] = useState(8);

  //tracking whether include "numbers" in password or not.
  const [numberAllowed, setNumberAllowed] = useState(false);

  //tracking whether special character reqired in password.
  const [charAllowed, setCharAllowed] = useState(false);

  //tracking generated password to update it.
  const [password, setPassword] = useState("");

  //"useRef()" hook to take reference and do manipulation over it.
  const passwordRef = useRef(null);

  //function to generate password
  //we are using "useCallback()" hook as it is used to 'cache' a function definition between re-renders.
  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*-_+= [] {}~`";

    //generating password as per given size
    for(let i = 0 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    //after generating the password it's time to set it.
    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword]);

  //copy to clipboard functionality
  const copyPasswordToClipboard = useCallback(() => {

    //yahan par hum jante hain ki "react" render hokar JS hi hoti hai
    //so we can use "window" but in "nextJS" we can't as it is an server side rendering.
    window.navigator.clipboard.writeText(password);

    //to add some style or manipulation we use our reference.
    //below syntax will tell is there is password then copy else do nothing.
    passwordRef.current?.select();
  }, [password]);


  //in "useState" we try to optimize the method on what dependencies it is relying

  //but in "useEffect()" jab bhi koi dependency change hogi it will run 
  //the "function" provided to it.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-8 text-orange-500 bg-gray-800'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly
           ref={passwordRef}
           />
           <button 
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

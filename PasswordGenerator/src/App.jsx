

import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [length , setlength] = useState(8)
  const [numberAllow , setnumberAllow] = useState(false)
  const [charAllow , setcharAllow] = useState(false)
  const [password , setpassword] = useState("")

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_-+="
    
    for(let i = 1 ; i <= length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  } , [length , numberAllow , charAllow , setpassword])

  useEffect(()=>{
    PasswordGenerator()
  },[length ,numberAllow, charAllow])

  const CopyPassToClip = useCallback(()=>{
    passwordRef.current?.select();
    alert("copied to clipboard")
    window.navigator.clipboard.writeText(password)
  } , [password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center p-1 my-2'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text " 
      value={password}
      className='outline-none w-full py-1 px-3 my-3 rounded'
      placeholder='password'
      readOnly
      />
      <button className='outline-none text-white px-3 py-0.5 text-center ' 
      onClick={CopyPassToClip} >
      Copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2 '>
      <div className='flex items-center gap-x-1 mb-4'>
        <input type="range" 
        min ={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
        />
        <label> length: {length}</label>
      </div>
        <div className='flex item-center gap-x-1 mb-4'>
          <input type="checkbox" 
          defaultChecked = {numberAllow}
          id='numberInput'
          ref={passwordRef}
          onChange={()=>{
            setnumberAllow((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1 mb-4'>
          <input type="checkbox" 
          defaultChecked = {charAllow}
          id='CharInput'
          onChange={()=>{
            setcharAllow((prev) => !prev);
          }}
          />
          <label htmlFor="CharInput">Characters</label>
        </div>
    </div>
    </div>
    </>
  )
}

export default App

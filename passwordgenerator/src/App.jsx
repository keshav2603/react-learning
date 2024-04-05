import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef(null);
  const genPassword = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+="0123456789";
    }
    if(charAllowed){
      str+= "!@#$%^&*()_+";
    }

    for(let i=1;i<length;i++){
      let num=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(num);
    }
    setPassword(pass);

  },[length, numberAllowed, charAllowed])


  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  }
  useEffect(()=>{
    genPassword()
  },[length, numberAllowed, charAllowed])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
      <div  className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button  
            onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={18}
          value={length}
          className='cursor-pointer'
          name=""
          id="" 
          onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          name="" 
          id=""
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} 
          />
          <label htmlFor="number">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          name="" 
          id=""
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} 
          />
          <label htmlFor="character">Character</label>
        </div>

      </div>

    </div>
  )
}

export default App

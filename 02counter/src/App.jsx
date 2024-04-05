import { useState } from 'react';
import './App.css'

function App() {
  let [count,setcounter]=useState(15);
  const addone = ()=>{
    setcounter(prevCount => prevCount + 1);
    setcounter(prevCount => prevCount + 1);
    setcounter(prevCount => prevCount + 1);
    setcounter(prevCount => prevCount + 1);
    setcounter(prevCount => prevCount + 1);
    setcounter(prevCount => prevCount + 1);
   
  }
  const decreadeone= () =>{
    setcounter(count - 1);
  }


  return (
    <>
      <h1> here is the count: {count}</h1>
      <h2>preseented by keshav{count}</h2>
      <button onClick={addone}>increase value</button>
      <button onClick={decreadeone}>decrease value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App

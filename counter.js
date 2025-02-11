// import Counter from "./Counter";
import { useState } from "react";
import './App.css'

function App() {
 let  [counter,setCounter]=useState(0)
 function incCont(){
  setCounter(counter+1);
 }

  return (
    <>
     <h1>State in React !</h1>
     <button onClick={incCont}>count ={counter}</button>
     <header>counting to abhi chal rahi hai {counter}</header>
    

    </>
  )
}

export default App

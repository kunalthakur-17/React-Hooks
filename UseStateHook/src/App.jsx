import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Add </button>
    <button onClick={()=>setCount(count-1)} disabled={count<=0}>Subtract</button>
    <button onClick={()=>setCount(0)}>Reset</button>
   </div>
   </>
  )
}

export default App

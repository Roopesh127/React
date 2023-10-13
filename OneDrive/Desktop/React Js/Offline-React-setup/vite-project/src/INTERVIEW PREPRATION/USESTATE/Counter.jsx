import { useState } from 'react'

const Counter = () => {
    const [state,setstate] =useState(0)
  return (
    <>
    <p>Counter:{state}</p>
    <button onClick={()=>setstate((val)=>val+1)}>Increment</button>
    <button onClick={()=>setstate((val)=>val-1)}>Decrement</button>
    </>
  )
}

export default Counter
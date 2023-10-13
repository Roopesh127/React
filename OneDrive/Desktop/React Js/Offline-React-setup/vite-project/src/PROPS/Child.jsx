import { useState } from "react"

const Child = () => {
    const[state,setstate]=useState(0)
  return (
    <>
    <div style={{backgroundColor:'green' , height: 100 , width: 200}}>
    <p>Counter{state}</p>
            <button onClick={() => setstate((val) => val + 1)}>Increment</button>
            <button onClick={() => setstate((val) => val - 1)}>Decrement</button>
    </div>

    </>
    )
}

export default Child
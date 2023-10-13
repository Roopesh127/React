import { useState } from 'react'

const Counterrrrr = () => {
    const [count , setcount] = useState(0)
    const updatecount = (value) =>{
        const newcount = count+value;
        if(newcount>=0 && newcount<20){
            setcount(newcount);
        }
    };
  return (
    <>
    <div>Counter</div>
    <button onClick={updatecount(1)}>Increment</button>
    <button onAuxClick={updatecount(-1)}>Decrement</button>
    </>
  )
}

export default Counterrrrr
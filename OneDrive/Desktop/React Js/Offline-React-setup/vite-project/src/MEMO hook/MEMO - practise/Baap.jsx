import { useState } from 'react'
import Beta from './Beta';

const Baap = () => {
    const[count,setcount]= useState(0);
  return (
    <div>
     <button onClick={()=>{setcount((val)=>val+1)}}>Counter</button>
     <p>Counter :{count}</p>
     <Beta/>
     <Beta  count = {count}/>
     <Beta/>
     <Beta/>
     <Beta/>
    </div>
  )
}

export default Baap
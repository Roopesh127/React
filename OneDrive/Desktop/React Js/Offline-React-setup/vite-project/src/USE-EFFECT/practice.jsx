import  { useEffect, useState } from 'react'

const Practice = () => {
    const[search,setSearch] = useState("");
    const[counter,setcounter] = useState(0);
    useEffect(()=>{
        console.log("bhai 1 baar chalenge ham")
    },[]);
    useEffect(()=>{
        console.log("bhai mai to chalung jitni baar serch karoge")
    },[search]);
    useEffect(()=>{
        console.log("jitne baar count karoge")
    },[counter])
  return (
    <>
    <input type="text" value={search}
       onChange={(e)=>setSearch(e.target.value)}
    />
    <button onClick={()=>setcounter((val)=>val +1)}>Increment</button>
    <button onClick={()=>setcounter((val)=>val -1)}>Decrement</button>
    </>
  )
}

export default Practice
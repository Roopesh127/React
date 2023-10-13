import { useEffect } from "react"

const  Useeffectsyntax=()=>{
    useEffect(()=>{
        console.log("mai to chl gaya")
    },[]);

    useEffect(()=>{
        "mai 1 baar hi chal paunga bhai"
    },[1]);
     
    useEffect(()=>{
        console.log("mujhe koi dependancy deni hi ni")
    })
     return(
        <h1>Hello I am Sabka Baap</h1>
     )
}
export default Useeffectsyntax
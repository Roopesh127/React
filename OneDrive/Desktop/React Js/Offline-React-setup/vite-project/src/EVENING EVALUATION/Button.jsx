import { useState } from 'react'

const Button = () => {
    const [buttonstate, setbuttonstate] = useState("DEACTIVE")
    const handleclick = () => {
        if (buttonstate === "DEACTIVE") {
            setbuttonstate("ACTIVATE")
        }
        else {
            setbuttonstate("DEACTIVE")
        }

    const mssages = () =>{
        if(buttonstate === "ACTIVATE"){
            // setbuttonstate("ACTIVATE")
            console.log("Activate")
        }
    }    
    }
    return (
        <>

            <button onClick={handleclick}>{buttonstate}</button>
            <h1>(mssages)</h1>
            
        </>
    )
}

export default Button
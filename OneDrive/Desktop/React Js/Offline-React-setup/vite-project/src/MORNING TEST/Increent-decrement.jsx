import { useState } from "react"

const Counteer = () => {
    const [number, setnumber] = useState(10)
    return (
        <>
            <h1>Counter :{number}</h1>
            <button onClick={() => (number == 0) ? setnumber(30) : setnumber(number + 2)}>Increment</button>
            <button onClick={() => (number == 0) ? setnumber(0) : setnumber(number - 2)}>Decrement</button>
        </>
    )
}
export default Counteer


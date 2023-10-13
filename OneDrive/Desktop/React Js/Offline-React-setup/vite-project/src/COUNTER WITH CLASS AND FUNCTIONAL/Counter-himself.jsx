import { useState } from "react"

const Counter = () => {
    const [counter, setcounter] = useState(0);
    return (
        <>
            <p>counter:{counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Increment</button>
            <button onClick={() => setcounter(counter - 1)}>Decrement</button>

        </>
    )
}
export default Counter;
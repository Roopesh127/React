import { useState } from "react"
import Child1 from "./Child"



const Parent1 = () => {
    const [state, setstate] = useState()
    return (
        <>
            <Child1 state={state} />
            <input
                onChange={(e) => setstate(e.target.value)}
                type="text"
                value={state}
            />
        </>
    )
}

export default Parent1
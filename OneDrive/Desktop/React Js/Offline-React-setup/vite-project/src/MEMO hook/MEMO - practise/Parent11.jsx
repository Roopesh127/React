import { useState } from 'react'
import Child11 from './Child11';

const Parent11 = () => {
    const [number, setnumber] = useState(0)
    return (
        <>
            <p>couter:{number}</p>
            <button onClick={() => setnumber(number + 1)}>Increment</button>
            <button onClick={() => setnumber(number - 1)}>Decrement</button>
            <Child11 />
            <Child11 incre={number} />

            <Child11 />

            <Child11 />

        </>
    )
}

export default Parent11;
import { useState } from "react";

const CounterFC = () => {
    const [counter, setCounter] = useState(100);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
};

export default CounterFC;
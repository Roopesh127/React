import { useState, useMemo } from "react";

const FuncComp = () => {
    const [userName, setUserName] = useState("");

    // Re-Calculated once only
    const counter = useMemo(
        () => {
            let counter = 0;
            for (let item = 0; item < 100; item++) {
                counter = counter + item;
            }
            return counter;
        },
        [
            /*Optional state or props can be provided to re-calculate*/
        ]
    );

    return (
        <div>
            <p>Counter: {counter}</p>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
    );
};

export default FuncComp;
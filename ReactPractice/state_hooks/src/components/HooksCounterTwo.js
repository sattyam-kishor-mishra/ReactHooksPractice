import React, { useState } from 'react';


export function HooksCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for (var i = 1; i <= 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <>
            <div>HooksCounterTwo</div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementByFive}>Incremnet 5</button>
        </>
    )
}


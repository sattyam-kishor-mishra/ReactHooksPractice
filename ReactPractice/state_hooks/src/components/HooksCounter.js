import React, { useState } from 'react'

export function HooksCounter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <div>HooksCounter</div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </>
    )
}

 
import React, { useState, useEffect } from 'react'

export function EffectHooksCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("rendering times");
        document.title = `you clicked ${count}`;
    }, [count])



    const incrementCounter = () => {
        setCount(
            count + 1,
        );
    }

    return (
        <>

            <div>EffectHooksCounterOne</div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={incrementCounter}>Count {count}</button>

        </>
    )
}


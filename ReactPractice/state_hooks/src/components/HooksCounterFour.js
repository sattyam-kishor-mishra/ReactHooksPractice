import React, { useState } from 'react'

export function HooksCounterFour() {
    const [items, setItem] = useState([]);

    const addItem = () => {
        setItem(
            [
                ...items,

                {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ]
        )
    }

    return (
        <>
            <div>HooksCounterFour</div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(
                    item => (
                        <li key={item.id}>{item.value}</li>
                    )
                )}
            </ul>
        </>

    )
}


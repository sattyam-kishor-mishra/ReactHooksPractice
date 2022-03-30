import React, { useState } from 'react'

export function HooksCounterThree() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    });


    const setFirstName= (value)=>{
        setName({
            ...name,
            firstName:value
        });
    }

    const setLastName= (value)=>{
        setName({
            ...name,
            lastName:value
        });
    }

    return (
        <>
            <div>HooksCounterThree</div>

            <input type="text" value={name.firstName} onChange={e => setFirstName(e.target.value)}></input>
            <input type="text" value={name.lastName} onChange={e => setLastName(e.target.value)}></input>

            <h2>First Name : {name.firstName}</h2>
            <h2>Last Name : {name.lastName}</h2>
        </>
    )
}


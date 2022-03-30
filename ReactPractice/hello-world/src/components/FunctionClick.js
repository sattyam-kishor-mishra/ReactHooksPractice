import React from 'react'

function FunctionClick() {
    function clickEventHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={clickEventHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

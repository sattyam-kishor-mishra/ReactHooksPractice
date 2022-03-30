import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Button class Clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>classClick</button>
            </div>
        )
    }
}

export default ClassClick

import React, { Component } from 'react'

 class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.childtoparentHandler('child')}>Click me</button>
            </div>
        )
    }
}

export default ChildComponent

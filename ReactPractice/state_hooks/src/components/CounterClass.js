import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {
        return (
            <>
                <div>CounterClass</div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </>
        )
    }
}

export default CounterClass
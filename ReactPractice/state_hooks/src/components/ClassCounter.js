import React, { Component } from 'react'

class ClassCounter extends Component {
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
            <div>
                <div>classcounter</div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
                <Input type="text"></Input>
                <Input type="text"></Input>
                <Input type="text"></Input>

            </div>

        )
    }
}

export default ClassCounter
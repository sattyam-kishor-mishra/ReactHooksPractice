import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}
IncrmentFunction=()=>{
    this.setState({
        count:this.state.count+1
    }, ()=>{
        console.log('CallBack Value :', this.state.count)
    })
    console.log(this.state.count);
}

Decrement=()=>{
    this.setState({
        count:this.state.count-1
    }, ()=>{
        console.log('Callback Value : ', this.state.count)
    })
}

incrementOne=()=>{
    this.setState((prevState)=>({
            count:prevState.count+1
        }),()=>{console.log('Callback Value : ', this.state.count)})
        console.log(this.state.count);
}

IncrementFive=()=>{
    this.incrementOne();
    this.incrementOne();
    this.incrementOne();
    this.incrementOne();
    this.incrementOne();
}


    render() {
        return (
            <div>
                <div>
                    count : {this.state.count}
                </div>                
                <button onClick={()=>this.IncrmentFunction()}>Increment</button>

                <button onClick={()=>this.Decrement()}>Decrement</button>
                <div>
                    <button onClick={()=>this.IncrementFive()}>Increment by 5</button>
                </div>
            </div>
        )
    }
}

export default Counter

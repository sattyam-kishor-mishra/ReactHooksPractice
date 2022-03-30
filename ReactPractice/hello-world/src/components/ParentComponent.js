import React, { Component } from 'react'
import ChildComponent,{  } from "./ChildComponent";

 class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }

        this.ChildtoParentFn=this.ChildtoParentFn.bind(this)
    }

    ChildtoParentFn=(childName)=>{
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent childtoparentHandler={this.ChildtoParentFn}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent

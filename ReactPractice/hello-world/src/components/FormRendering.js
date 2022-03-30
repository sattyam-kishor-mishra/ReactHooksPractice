import React, { Component } from 'react'

export class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             content:'',
             topic:'react'
        }
    }

    usernameChangeHandeller = (event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    contentChangeHandeller = (event)=>{
        this.setState({
            content:event.target.value
        })
    }

    topicChangeHandeller = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }


    submitFormEvent=(event)=>{
        alert(`${this.state.userName}  ${this.state.content} ${this.state.topic}`)
        event.preventDefault()
    }

    
    render() {
        return (
            <form onSubmit={this.submitFormEvent}>
                <div>
                    <label>UserName : </label>
                    <input type='text' onChange={this.usernameChangeHandeller} value={this.state.userName}></input>
                </div>

                <div>
                    <label>Content : </label>
                    <textarea onChange={this.contentChangeHandeller} value={this.state.content}></textarea>
                </div>

                <div>
                    <select onChange={this.topicChangeHandeller} value={this.state.topic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>

                <div>
                    <button type='submit'>submit</button>
                </div>


            </form>
        )
    }
}

export default FormRendering

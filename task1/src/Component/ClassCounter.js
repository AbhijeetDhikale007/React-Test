import React, { Component } from 'react';

class Count extends Component {

    constructor() {
        super()
        this.state = {
            count: 10000,
            Dom: 100
        }
    }

    Increment = () => {
        this.setState({count: this.state.count +1})
    }
    Decrement = () => {
        this.setState({Dom: this.state.Dom -1})
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <h1>Dom: {this.state.Dom}</h1>
                <button onClick={()=> this.Increment()}>Increment</button>
                <button onClick={()=> this.Decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Count;
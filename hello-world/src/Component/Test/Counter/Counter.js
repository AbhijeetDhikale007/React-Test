import { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            Count: 0,
        }
    }

    Increment = () => {
        this.setState({ Count: this.state.Count + 1 })
    }

    Decrement = () => {
        this.setState({ Count: this.state.Count - 1 })
    }

    Reset = () => {
        this.setState({Count: this.state.Count = 0})
    }

    render(){
        return(
            <div>
                <h1>Counter Using Class</h1>
                <h2>{this.state.Count}</h2>
                <br/>
                <button className="btn btn-primary" onClick={this.Increment}>Increment</button>
                <br/><br/>
                <button className="btn btn-primary" onClick={this.Decrement}>Decrement</button>
                <br/><br/>
                <button className="btn btn-danger" onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;
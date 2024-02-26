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
                {this.state.Count}
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
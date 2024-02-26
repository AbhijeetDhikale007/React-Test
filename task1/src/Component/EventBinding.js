import { Component } from "react";

class EventBinding extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello Saurav'
        }
    }

    classClicked() {
        this.setState(
            {
                message: 'Bye'
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.classClicked.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBinding;
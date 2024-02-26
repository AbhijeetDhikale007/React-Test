import { Component } from "react";

class classClick extends Component {
    classClicked() {
        console.log("ButtonClicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.classClicked}>Click</button>
            </div>
        )
    }
}

export default classClick;
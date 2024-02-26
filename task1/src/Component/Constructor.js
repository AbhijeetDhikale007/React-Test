import React, { Component } from "react";

class Constructor extends Component {
    constructor() {
        super()
        this.state = {
            Constructor: 'Welcome, Ya Basa Bokandi'
        }
    }

    ChangeConstructor() {
        this.setState({
            Constructor: 'Nigh Chalta Hoy'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.Constructor}</h1>
                <button onClick={() => this.ChangeConstructor()}>Click Here</button>
            </div>
        )
    }
}

export default Constructor;
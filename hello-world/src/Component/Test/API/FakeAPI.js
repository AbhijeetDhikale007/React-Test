import React from 'react';
import axios from 'axios';

class FakeAPI extends React.Component {
    state = {
        API: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const API = res.data;
                this.setState({ API });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.API
                        .map(API =>
                            <li key={API.id}>{API.name}</li>)
                }
            </ul>
        )
    }
}

export default FakeAPI;
import React from 'react';
import axios from 'axios';

class Axios extends React.Component {
    state = {
        API: []
    }
    ComponentsDivMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const Axios = res.data;
                this.setState({ Axios });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.Axios
                        .map(Axios =>
                            <li key={Axios.id}>{Axios.name}</li>)
                }
            </ul>
        )
    }
}

export default Axios;
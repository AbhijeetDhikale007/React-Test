import React from 'react';
import { Home } from './Component/Test/Router/Home.jsx';
import { About } from './Component/Test/Router/About.jsx';
import { Contacts } from './Component/Test/Router/Contacts.jsx';
import Form from './Component/Test/Form/Form.js'
import Navbar from './Component/Test/Router/Navbar.jsx';
import Navbar2 from './Component/Test/Navbar/Navbar2.js'
import Counter from './Component/Test/Counter/Counter.js'
import { Routes, Route } from "react-router-dom";
// import FakeAPI from './Component/Test/API/FakeAPI.js';
import axios from 'axios'

// import TicTacToe from './Component/TicTacToe/TicTacToe.js';

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

function App() {
  return (
    // <div>
    //   <TicTacToe/>
    // </div>

    <div className='container'>
      <Navbar2 />
      <br />
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<div><Home /><About /><Contacts /></div>}></Route>
      </Routes>
      <br /><br />
      <Form />
      <br />
      <FakeAPI />
      <br />
      <Counter />
    </div>
  )
}

export default App;
import React from 'react';
import { PageForm } from './Component/Test/Router/PageForm.jsx';
import { PageFakeAPI } from './Component/Test/Router/PageFakeAPI.jsx';
import { PageCounter } from './Component/Test/Router/PageCounter.jsx';
import { PageCounterHooks } from './Component/Test/Router/PageCounterHooks.jsx';
import { PageTicTacToe } from './Component/Test/Router/PageTicTacToe.jsx';
import Form from './Component/Test/Form/Form.js'
import Navbar from './Component/Test/Router/Navbar.jsx';
import Navbar2 from './Component/Test/Navbar/Navbar2.js'
import Counter from './Component/Test/Counter/Counter.js'
import CounterHooks from './Component/Test/Counter/CounterHooks.js';
import { Routes, Route } from "react-router-dom";
import FakeAPI from './Component/Test/API/FakeAPI.js';
import TicTacToe from './Component/TicTacToe/TicTacToe.js';

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
        <Route path='/Form' element={<Form/>}></Route>
        <Route path='/FakeAPI' element={<FakeAPI/>}></Route>
        <Route path='/Counter' element={<Counter/>}></Route>
        <Route path='/CounterHooks' element={<CounterHooks/>}></Route>
        <Route path='/TicTacToe' element={<TicTacToe/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
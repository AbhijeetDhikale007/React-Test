// import logo from './Neon.png';
// import './App.css';
// import Greet from './Component/Greet.js';
// import { Component } from 'react';
// import Welcome from './Component/Welcome.js';
// import Construct from './Component/Construct.js';
// import CreateElement from './Component/CrateElement.js';
// import Hello from './Component/Hello.js'
// import App2 from './Component/Feb8.js'
// import Message from './Component/Message.js';
// import Constructor from './Component/Constructor.js';
// import Webpage from './Webpage.js';
// import CurrencyConv from './Component/CurrencyConv.js';
// import CounterHook from './Component/CounterHook.js';
// import Count from './Component/ClassCounter.js';
// import HookDoc from './Component/HookDoc.js';
// import FunctionOnClick from './Component/EventHandling.js';
// import EventBinding from './Component/EventBinding.js';
// import {Routes, Route} from 'react-router-dom'
import { Home } from './Router/Home.jsx';
import { About } from './Router/About.jsx';
// import Navbar from './Router/Navbar.js';
// import TicTacToe from './Component/TicTacToe/TicTacToe.js';
import Form from './Component/Test/Form.js'
import Navbar from './Component/Test/Navbar/Navbar.js'
import Counter from './Component/Test/Counter/Counter.js'
import {Routes, Route} from  "react-router-dom";

// Stateful Class Extend Components
// class App1 extends Component {
//   render() {
//     return <h2>Hello Adgaon!</h2>
//   }
// }

// Stateless Functional Components
function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //     <Routes>
    //         <Route path='/' element={<div><Home/><About/></div>}></Route>
    //     </Routes>

    //   <img src={logo} className="App-logo" alt="logo" />
    //   <Webpage></Webpage>
    //   <Greet></Greet>
    //   <App1></App1>
    //   <Welcome></Welcome>
    //   <Construct></Construct>
    //   <CreateElement></CreateElement>
    //   <App2 name="Bhavesh"></App2>
    //   <App2 name="Abhijeet"></App2>
    //   <Constructor></Constructor>
    //   <Message></Message>
    //   <Hello name="Hello Swapnil, Bar Ye Ka?" Hero="Shaktiman"></Hello>
    //   <CurrencyConv></CurrencyConv>
    //   <CounterHook></CounterHook>
    //   <Count></Count>
    //   <HookDoc></HookDoc>
    //   <FunctionOnClick></FunctionOnClick>
    //   <classClick></classClick>
    //   <EventBinding></EventBinding>
    // </div>

    // <div>
    //   <TicTacToe/>
    // </div>
    <div className='container'>
      <Navbar />
      <br/>
      <Routes>
        <Route path='/' element={<div><Home/><About/></div>}></Route>
      </Routes>
      <br /><br />
      <Form />
      <br />
      <Counter />
    </div>
  )
}

export default App;
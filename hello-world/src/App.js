import { Home } from './Component/Test/Router/Home.jsx';
import { About } from './Component/Test/Router/About.jsx';
// import Navbar from './Router/Navbar.js';
import Form from './Component/Test/Form/Form.js'
import Navbar from './Component/Test/Navbar/Navbar.js'
import Counter from './Component/Test/Counter/Counter.js'
import {Routes, Route} from  "react-router-dom";
import Axios from './Component/Test/API/Axios.js';

// import TicTacToe from './Component/TicTacToe/TicTacToe.js';

function App() {
  return (
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
      <Axios />
      <br />
      <Counter />
    </div>
  )
}

export default App;
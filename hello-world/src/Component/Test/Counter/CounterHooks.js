import { useState } from "react";

function CounterHooks() {
    const SCount = 0;
    const [Count, setCount] = useState(SCount);

    /*
    function Increment() {
        setCount(prevCount => prevCount + 1);
    }

    function Decrement() {
        setCount(prevCount => prevCount - 1);
    }

    function Reset () {
        setCount(prevCount => prevCount = 0)
    }
    */
   
    return (
        <div>
            <h1>Counter Using Hooks</h1>
            <h1>{Count}</h1>
            <button className="btn btn-primary" onClick={() => setCount(Count + 1)}>Increment</button>
            <br /><br />
            <button className="btn btn-primary" onClick={() => setCount(Count - 1)}>Decrement</button>
            <br /><br />
            <button className="btn btn-danger" onClick={() => setCount(Count * 0)}>Reset</button>
        </div>
    )
}

export default CounterHooks;
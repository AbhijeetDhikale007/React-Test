import React from "react";
import { useState } from "react";

function CounterHook() {
    const initialCount = 0;
    const [Count, setCount] = useState (initialCount);

    function IncrementFive(){
        for(let i = 0; i<5; i++)
        {
            setCount (prevCount => prevCount + 1);
        }
    }

    function DecrementFive(){
        for(let i = 5; i>0; i--)
        {
            setCount (prevCount => prevCount - 1);
        }
    }

    return (
        <div>
            <h1>{Count}</h1>
            <button onClick={() => setCount (Count +1)}>Increment</button><br/>
            <button onClick={IncrementFive}>Increment By 5</button><br/>
            <button onClick={() => setCount (Count -1)}>Decrement</button><br/>
            <button onClick={DecrementFive}>Decrement By 5</button><br/>
            <button onClick={() => setCount (Count*0)}>Reset</button>
        </div>
    )
}

export default CounterHook;
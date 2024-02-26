import React from "react";
import { useState, useEffect } from "react";

function HookDoc() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Document ${count}`
    });

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default HookDoc;
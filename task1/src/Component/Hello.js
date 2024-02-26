import React from "react";

// Props In Stateless Components
const Hello = (Props) => {
    console.log(Props)
    return <h1>Hello Swapnil {Props.Hero} {Props.children}</h1>
}

export default Hello;
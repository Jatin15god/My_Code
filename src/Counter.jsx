import { useState } from "react";

const Counter = ()=>
{
    let [count, setCount]=useState(0)
    let inc = ()=>{
        setCount(count+2)
    }
    return (
        <div>
            <h1>Hello</h1>
            <h1>God</h1>
            <h1>Count : {count}</h1>
            <button onClick={inc}>Increase By 2</button>
            <button onClick={()=>setCount(count+1)}>Increase By 1</button>
        </div>
    );
}

export default Counter
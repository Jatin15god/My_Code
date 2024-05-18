import { useEffect, useState } from "react";

const TestUseEffect = ()=>{
    const [count, setCount]=useState(0)
    const [name, setNames]=useState("")
    useEffect(()=> {
        console.log("In UseEffect\nHook Count : " + count + " Name : " + name);
    }, [count]) // Count is our dependency, can be done as [count, name] for more dependencies
    return
}
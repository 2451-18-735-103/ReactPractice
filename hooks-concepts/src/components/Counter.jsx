import React,{useState,useEffect} from 'react'


function Counter() {
    const [count,setCount]=useState(0);
    useEffect(()=>console.log("clicked"),[count])//whenever count changes the function in useeffect will execute
  return (
    <div>
        <h1>This is an example for useEffect</h1>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default Counter





//React's Strict Mode performs additional checks to highlight unexpected side effects.
// One of these checks is that it mounts (renders) the component, unmounts it, 
//and then mounts it again, just to make sure the useEffect behaves correctly. 
//This is why useEffect runs twice initially in development mode.

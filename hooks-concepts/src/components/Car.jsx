import React from 'react';
import { useState } from "react";
//rfce for function
//rface for arrow function
function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
  
  

 
 const updateColor = () => {
   setCar(previousState=>{
    return {...previousState,color:"blue"}
   });
 }
 
  return (
    
    <div>
        <h1>This is an Example for useState</h1>
        <p>My {car.brand}</p>
    <p>
      It is a {car.color} {car.model} from {car.year}.
    </p>
    <button
      type="button"
      onClick={updateColor}
    >Blue</button>
    </div>
  )
}

export default Car
import React from 'react'
import { useState } from "react";
function FavoriteColour() {
  const [color, setColor] = useState("red");
  return (
   
   <>
   <h1>This is an Example for useState</h1>
   <p>My favorite color is {color}!</p><button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
    </>
  )
}

export default FavoriteColour
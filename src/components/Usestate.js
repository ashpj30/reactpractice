import React from 'react'
import { useState } from "react";

function Usestate() {
    const [color, setColor] = useState("red");
  return (
    <div>
        <h1>My favorite color is {color}!</h1>
        <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </div>
  )
}

export default Usestate
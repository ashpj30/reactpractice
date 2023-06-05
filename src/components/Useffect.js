import { useState, useEffect } from "react";
function Useffect() {
  const [count,Setcounter] = useState(0);

  useEffect ( ()=>{
    console.log("component mounted") //first functional
  },)

  function updatedCount(){ //2 optional
    Setcounter(count + 1)
  }
  return (
    <div>
<h1>button clicked {count} times</h1>
<button onClick={updatedCount}>click</button>
    </div>
  )
}

export default Useffect;
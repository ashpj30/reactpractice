import React from 'react'

function NameList1() {
    const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);


  return (
    <div>{doubled}</div>
  )
}

export default NameList1
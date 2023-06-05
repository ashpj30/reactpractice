import React from 'react'

function NameList() {
    const names = ['ash','abc','raj','ash']
    const NameList =names.map((name,index) =>  <h2 key={index}>{index}{name}</h2>)
  return <div> {NameList}</div>
    
     {/*   {
            names.map(name => <h2>{name}</h2>)
        }
    </div>
    )*/}
}

export default NameList
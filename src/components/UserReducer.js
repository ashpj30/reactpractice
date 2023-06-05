import React,{useReducer} from 'react'//1 import usereducer is also a fun

const initialState = 0 //2 defeining the initial state and reducer fun
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement' :
            return state - 1
            case 'reset':
                return initialState
                default:
                    return state    
    }

}
function UserReducer() {  //3 return jsx
   const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <div>count- {count}</div>
        <button onClick={()=>dispatch ('increment')}> Increment</button>
        <button onClick={()=>dispatch ('decrement')}>Decrement</button>
        <button onClick={()=>dispatch ('reset')}>Reset</button>
    </div>
  )
}

export default UserReducer
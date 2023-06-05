import { type } from '@testing-library/user-event/dist/type'
import React,{useReducer} from 'react'

const initialState = {
       firstCounter : 0                            // here we created object 
              // by using state an object we can create two counters in a single components
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + 1}
        case 'decrement' :
            return {firstCounter:state.firstCounter - 1}
            case 'reset':
                return initialState
                default:
                    return state    
    }

}
function UserReducer2() {
    const [count,dispatch]= useReducer(reducer,initialState)
    return (
      <div>
          <div>count- {count.firstCounter}</div>
          <button onClick={()=>dispatch ({type:'increment'})}> Increment</button>
          <button onClick={()=>dispatch ({type:'decrement'})}>Decrement</button>
          <button onClick={()=>dispatch ({type:'reset'})}>Reset</button>
      </div>
    )
  }

export default UserReducer2
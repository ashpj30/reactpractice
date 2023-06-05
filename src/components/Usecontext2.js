import React,{useContext, UseContext} from 'react' //1st step import usecontext
import Usecontext3 from './Usecontext3'
import { UserContext,ChannelContext  } from '../App'//2 import neceesory context

function Usecontext2() { //3 callthe use context function passing in context as aggument
   const user = useContext(UserContext) 
   const channel = useContext(ChannelContext)
  return ( //render the valuess
    <div>
    {user}-{channel} 
    </div>
  )
}

export default Usecontext2
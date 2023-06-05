
import { useNavigate } from "react-router-dom"
export const Home = () => { 
  const navigate  = useNavigate()// we created the home and about components to renderd at diff url parts
  return ( <>
  <div>Home Page</div>
  <button onClick={()=> navigate('order-summery')}>place order</button>
  
  </>
  )
}

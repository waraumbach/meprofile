
import './App.css'
import logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate();
  
  

  return (
    <>
    <div>
     <img src={logo}
      alt="greenlogo"
      style={{ width: "500px", height: "400px", margin: "0" }}
     />
   <button onClick={() => navigate("/about")}>click</button>
     </div>
    </>
    
  )
}

export default App

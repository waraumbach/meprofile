
import { Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import About from './components/About.jsx';

const Router =()=>{

    return(
    
  
    <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<About/>} />
            




        </Routes>
    
    
    
)

}

export default Router




import FloatingLogos from './component/FloatingLogos';
import Header from './component/Header';
import Homepage from './component/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './pages/Resume';
import Creativity from './pages/Creativity';
import Contact from './pages/Contact';
import AboutTameer from './pages/AboutTameer';


function App()
{
  return(
     <>
     <BrowserRouter>
     <FloatingLogos />
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/about" element={<AboutTameer/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/creativity' element ={<Creativity/>}/>
        <Route path ='/contact' element ={<Contact/>}/>


      </Routes>
      
    
     </BrowserRouter>
  </>
  )
 
}


export default App;
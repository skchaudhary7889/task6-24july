
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from "./Components/Home"
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';

function App() {
  return (
 
    <>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    
    </BrowserRouter>
  </>
  );
}

export default App;

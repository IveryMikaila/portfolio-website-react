//React Imports
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

//Import for Components
import NavBar from "./components/Navbar/NavBar";
import Footer from './components/Footer/Footer'

//Import for Pages
import Home from "./Pages/Home";


function App() {
  //Custom Cursor Code
const [cursorX, setCursorX] = useState()
const [cursorY, setCursorY] = useState()

window.addEventListener('mousemove', (e)=>{
  setCursorX(e.pageX)
  setCursorY(e.pageY)
})

  return (  
<>
<NavBar />
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Home />} />
</Routes>
</BrowserRouter>
<Footer />
<div className="cursor"
style={{
  left:cursorX + 'px',
  top:cursorY + "px"
}}
></div>
</>    
    
  );
}

export default App;

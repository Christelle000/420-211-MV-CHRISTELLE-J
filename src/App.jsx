import Portfolio from './Pages/Portfolio'
import Interest from './Pages/Interest'
import Home from './Pages/Home'
import Projet from './Pages/Projet'
import LogIn from './Pages/LogIn'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import { useState } from 'react'
function App() {
    const [projets, setProjets] = useState([]);

  const onAdd = (projet) => {
    setProjets(prev => [...prev, projet]);
  };
  return (
    <> 
     <NavBar/>
     
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Portfolio" element={<Portfolio projets= {projets} />} />
      <Route path="/Projet" element={<Projet onAdd={onAdd} projets={projets}/>} />
      <Route path="/Home" element={<Home nombreProjets={projets.length}/>} />
      <Route path="/Interest" element={<Interest />} />
      <Route path="/LogIn" element={<LogIn />} />


    </Routes>

    
    
   
    
    </>
  )
}

export default App

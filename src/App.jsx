import Porfolio from './Pages/porfolio'
import Interest from './Pages/Interest'
import Home from './Pages/Home'
import Project from './Pages/Project'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
function App() {
  return (
    <> 
     <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Porfolio" element={<Porfolio />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Interest" element={<Home />} />

    </Routes>
   
    
    </>
  )
}

export default App

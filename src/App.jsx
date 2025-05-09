import Portfolio from './Pages/Portfolio'
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
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Interest" element={<Interest />} />


    </Routes>
    
   
    
    </>
  )
}

export default App

import React from 'react'
import './LogIn.css'
import VideoLogIn from '../Components/VideoLogIn'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

function LogIn() {
  
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const UserName = formData.get("UserName")
    formEl.reset()

     if (UserName) {
        localStorage.setItem("UserName", UserName);
        alert("L'utilisateur à été enregistrer avec succès. Bonjour" +'  ' + UserName)
         navigate('/Home');
         } else { 
          alert("Un nom d'utilisateur est nécessaire pour continuer")
         }
  }  
  return (
    <> 
    <div className='LogIn-page'>
            
            <VideoLogIn/>
        <div className ="ContainerForm">
          <h1>LogIn</h1>
      <form className="LogInForm" onSubmit={handleSubmit}>
          <label htmlFor="Name">Nom d'utilisateur:</label>
          <input 
              type="text" 
              id="UserName"
              name="UserName"
              placeholder='Veuillez entrer votre nom'
              required
          />
          <button type='submit'>Terminer</button>
      </form>
       </div>  
    </div>
    

    
</>
  )
}

export default LogIn                      

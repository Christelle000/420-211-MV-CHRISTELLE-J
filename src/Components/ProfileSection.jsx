import React, {useState, useEffect} from 'react'
import image from '../assets/Profile.jpg'
import './ProfileSection.css'
function ProfileSection({ nombreProjets }) {
    const [bonjour, setBonjour] = useState('');
   
    useEffect(() => {

        const heurePresent = new Date().getHours('');
        if (heurePresent < 6 && heurePresent > 12){
            setBonjour('Bonjour')
        } else if (heurePresent >= 12 && heurePresent < 18 ) { 
            setBonjour('Bon après-midi')
        } else {
            setBonjour('Bonsoir')
        }

    }, []);
  return (
    <div className="ProfileContainer">
        <h1> {bonjour}</h1>
      <h2 className="Titre">Je m'appelle Christelle Jean-Jacques</h2>
      <h2 className="Titre">Étudiante en technique informatique</h2>
      <img src= {image} alt="profile" className = "imageProfile"/>
      <h3 className="Titre">Nombre de Projet : <strong>{nombreProjets}</strong></h3>
      
    </div>
  )
}


export default ProfileSection
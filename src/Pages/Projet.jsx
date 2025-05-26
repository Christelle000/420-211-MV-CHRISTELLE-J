import React from 'react'
import ProjetForm from '../Components/ProjetForm'

function Projet({ onAdd, projets}) {
  return (
    <> 
    <h1>Projet</h1>
    <div>
      <ProjetForm onAdd= {onAdd} />
      <h3>Liste des Projets ({projets.length}) </h3>
      <ul>
        {projets.map((p,index) => (
          <li key={index}> {p.nom} </li>
        ))}
      </ul>
      
    </div>
    
    </>
  )
}

export default Projet

import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    //Bloque de code pris dans le Tp1
      <div className="cards">
          <img 
              src= {props.image} 
              alt= {props.alt} 
          />
            <div className="card-description">
                  <h2> {props.titre} </h2>
                  <p> {props.description} </p>
            </div>
        
      </div >
  )
}

export default Cards

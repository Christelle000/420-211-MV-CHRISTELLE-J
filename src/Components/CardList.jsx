import React from 'react'
import './CardList.css'
import Cards from './Cards'
import cards from '../assets/data'


function CardList() {
  return (   
    <> 
    <h2 className="AboutMe">Centre d'intérêts</h2>
    <div className="container">
      {cards.map(card => (   
        <Cards 
            key={card.id}
            image={card.image}
            alt={card.alt}
            titre={card.titre}
            description={card.description}
        />
      ))}
      </div>
    </> 
    )
}  
   
 


export default CardList

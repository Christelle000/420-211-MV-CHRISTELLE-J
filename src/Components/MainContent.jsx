import React from 'react'
import "./MainContent.css"

function MainContent(props) {
  return (
    
      <main>
            <div className="main-head">
                <form className="search-box"
                    onSubmit={props.HandleSearch} >
                    <input 
                        type="search"
                        placeholder='Trouver un anime... '
                        required 
                        value = {props.search}
                        onChange ={(e)=> props.SetSearch(e.target.value)} />
                </form>
            </div>

           <div className="anime-list">
  {Array.isArray(props.animeList) && props.animeList.length > 0 ? (
    props.animeList.map(anime => (
      <div className="anime-card" key={anime.mal_id}>
        <a href={anime.url} target="_blank" rel="noopener noreferrer">
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <h4>{anime.title}</h4>
        </a>
      </div>
    ))
  ) : (
    <p style={{ color: "#fff" }}>Aucun anime trouvé ou chargement...</p>
  )}
</div>
       
           
            
      </main>
    
  );
}

export default MainContent

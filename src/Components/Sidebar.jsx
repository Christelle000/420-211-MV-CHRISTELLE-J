import React from 'react'
import './Sidebar.css'

function Sidebar({topAnime}) {

  return (
    <div>
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime => (
                  <a className='Top-animeLInk' 
                    href={anime.url || `https://myanimelist.net/anime/${anime.mal_id}`}
                    key = {anime.mal_id}
                    target="_blank" 
                    rel="norefferrer">
                       {anime.titles && anime.titles[0] ? anime.titles[0].title : "Titre indisponible"}
                </a>
                 
                ))}
                
            </nav>
        </aside>
    </div>
  )
}

export default Sidebar

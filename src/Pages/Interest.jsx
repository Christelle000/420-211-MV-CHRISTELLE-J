import './Interest.css'
import HeaderInterest from '../Components/HeaderInterest'
import {useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar'
import MainContent from '../Components/MainContent'

function Interest() {
  const[animeList,SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
 
  const GetTopAnime = async () => {
    const data = await fetch (`https://api.jikan.moe/v4/top/anime?&page=1&limit=10`)
      .then(res => res.json())
    
      SetTopAnime(data.data); //Top 5 des anime

  }
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)

  }

  const FetchAnime = async(query) => {
    const data = await fetch(`https://api.jikan.moe/v4/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res => res.json());
    SetAnimeList(data.data);


  }
  
    useEffect(() =>{
      GetTopAnime();
    }, []);

    console.log(topAnime);
    
  return (
    <> 
    
        <HeaderInterest/>
        <div className="content-wrap">
          <Sidebar 
            topAnime= {topAnime}/>
          <MainContent 
            HandleSearch = {HandleSearch}
            search = {search}
            SetSearch = {SetSearch}
            animeList = {animeList}
            
            />  
        </div>
        
    <div>
      
    </div>
    </>
  )
}

export default Interest

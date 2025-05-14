import React from 'react'
import './Interest.css'
import HeaderInterest from '../Components/HeaderInterest'
import {useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar'
import MainContent from '../Components/MainContent'

function Interest() {
  const[animeList,setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search,setSearch] = useState("");
  return (
    <> 
        <HeaderInterest/>
        <div className="content-wrap">
          <Sidebar 
            topAnime= {topAnime}/>
        </div>
        <MainContent/>
    <div>
      
    </div>
    </>
  )
}

export default Interest

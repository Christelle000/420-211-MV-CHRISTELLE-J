import React from 'react'
import ProfileSection from '../Components/ProfileSection'
import './Home.css'
import CardList from '../Components/CardList'
import Experience from '../Components/Experience'


function Home({ nombreProjets }) {
  return (
    <div>
        <ProfileSection nombreProjets= {nombreProjets} />
        <Experience/>
        <CardList/>
    </div>
  )
}

export default Home

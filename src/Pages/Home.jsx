import React from 'react'
import ProfileSection from '../Components/ProfileSection'
import './Home.css'
import CardList from '../Components/CardList'
import Experience from '../Components/Experience'


function Home() {
  return (
    <div>
        <ProfileSection/>
        <Experience/>
        <CardList/>
    </div>
  )
}

export default Home

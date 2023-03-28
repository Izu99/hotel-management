import React from 'react'
import AdventureAndExperienceCard from './AdventureAndExperienceCard'
import Slideshow from './SlideShow'
import NavBarHome from './NavBar_home'
import Footer from './Footer'
import '../Styles/OrderAndAdventureExperience.css'

function OrderAndAdvertureExperience() {
  return (
    <div className='OrderAndAdventureExperience'>
        <NavBarHome /> 

        <Slideshow />

        <AdventureAndExperienceCard />

        <Footer />
        
    </div>
  )
}

export default OrderAndAdvertureExperience
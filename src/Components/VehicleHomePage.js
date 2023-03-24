import React from 'react'
import '../Styles/VehicleHomePage.css'
import VehicleCard from './VehicleCard'
import img from '../images/vehicle0.jpg'
import NavBarHome from './NavBar_home'
import Footer from './Footer'


function VehicleHomepage() {
  return (
    <div className='vehiclePage'>
     
      <NavBarHome />
      <img src={img} alt="" srcset="" className='vehicle-banner'/>
      <div className="SearchBar">
        <input type="text" name="" id="" placeholder='Search...'/>
        <input type="text" placeholder='Type...'/>
        <input type="text" placeholder='Location...'/>
        <button type='submit'> Search </button> 
      </div>
      <VehicleCard />
      <Footer />
      
    </div>
  )
}

export default VehicleHomepage
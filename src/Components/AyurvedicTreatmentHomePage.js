import React from 'react'
import Treatment from './TreatmentCard'
import '../Styles/AyurvedicTreatmentHomePage.css'
import NavBarHome from './NavBar_home'
import Footer from './Footer'

function AyurvedicTreatmentHomePage() {
  return (
    <div className='AyurvedicTreatmentHomePage'>
      <NavBarHome />
      <div className="top">
        <p className='sentence'>What type of treatment are you looking for?</p>
        <div className="button-set">
          <button>
            Book and Appointment
          </button><br />
          <button>
            My Appointment
          </button><br />
          <button>
            SignOut
          </button><br />
        </div>
      </div>
      <div className="bottom">
        <div className="treatmentCards">
          <div className="treatmentCard">
            <Treatment />
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default AyurvedicTreatmentHomePage
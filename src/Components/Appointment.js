import React from "react";
import "../Styles/Appointment.css";
import NavBarHome from './NavBar_home'
import Footer from './Footer'

function Appointment() {
	return (
		<div className='AppointmentPage'>
      <NavBarHome />
			<form>
				<h2>Appointment</h2>
				<div className='detail'>
					<label htmlFor=''>Appointment ID</label>
					<input type='text' id='vehicleName' name='vehicleName' required />
				</div>

				<div className='detail'>
					<label htmlFor=''>Full Name</label>
					<input type='text' id='vehicleName' name='vehicleName' required />
				</div>

				<div className='detail'>
					<label htmlFor=''>Age</label>
					<input type='text' name='' id='' />
				</div>

				<div className='detail'>
					<label htmlFor=''>BirthDay</label>
					<input type='text' />
				</div>

				<div className='detail'>
					<label htmlFor=''>Address</label>
					<textarea type='text' name='' id='' rows={4}/>
				</div><br /><br />

				<div className='detail'>
					<label htmlFor=''>Mobile Number</label>
					<input type='text' />
				</div>

				<div className='choice'>
					<label htmlFor='' className="gender-label">Gender</label>
					<div className='radio-button'>
						<input type='radio' />
						<label for='option1'>Male</label>
					</div>

					<div className=' radio-button'>
						<input type='radio' />
						<label for='option2'>Female</label>
					</div>
				</div>
        <div className="button">
          <button type='submit'>Add to Cart</button>
				<button type='submit'>Processed to Payment</button>
        </div>
				
			</form>
      <Footer /> 
		</div>
	);
}

export default Appointment;

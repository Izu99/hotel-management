import React from "react";
import "../Styles/AyurvedicRegister.css";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";

function AyurvedicRegister() {
	return (
		<div className='AyurvedicRegisterPage'>
			<NavBarHome />
			<div className='AyurvedicRegister'>
				<form>
					<h2>User Register</h2>
					<div className='detail'>
						<label htmlFor=''>Full Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Age</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Country</label>
						<input type='text' name='' id='' />
					</div>

					<div className='detail'>
						<label htmlFor=''>State</label>
						<input type='text' />
					</div>

					<div className='choice'>
						<div className='radio-button'>
							<input type='radio' name='radio' />
							<label for='option1'>Male</label>
						</div>

						<div className=' radio-button'>
							<input type='radio' name='radio' />
							<label for='option2'>Female</label>
						</div>
					</div>

					<button type='submit'>Reset</button>
					<button type='submit'>Register</button>
				</form>
			</div>{" "}
			<Footer />
		</div>
	);
}

export default AyurvedicRegister;

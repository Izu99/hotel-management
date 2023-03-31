import React from "react";
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";

function AddVehicle() {
	return (
		<div className='AddVehiclePage'>
			<NavbarHome />
			<div className='content'>
				<form>
					<div className='detail'>
						<label htmlFor=''>Add Vehicle Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Vehicle Type</label>
						<select id='vehicleType' name='vehicleType'>
							<option value='type1'>type1</option>
							<option value='type2'>type2</option>
							<option value='type3'>type3</option>
						</select>
					</div>
					<div className='detail'>
						<label htmlFor=''>Vehicle Price Per day</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Add Vehicle Image</label>
						<input type='file' />
					</div>

					<div className='detail'>
						<label htmlFor=''>Description</label>
						<textarea required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Add Vehicle Name</label>
						<input type='text' />
					</div>

					<button type='submit'>Update</button>
				</form>
			</div>
            <Footer />
		</div>
	);
}

export default AddVehicle;

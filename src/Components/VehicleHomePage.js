import React, { Component } from "react";
import "../Styles/VehicleHomePage.css";
import img from "../images/vehicle0.jpg";
// import NavBarHome from './NavBar_home'
import Footer from "./Footer";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class VehicleHomepage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='vehiclePage'>
				{/* <NavBarHome /> */}

				<nav>
					<div className='logo'>
						<a href='/'>
							<img src={logo} alt='' srcset='' />
						</a>
					</div>
					<ul className='nav-links'>
						<li>
							<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
						</li>
						<li>
							<a href={"/appointmentHomepage/" + this.props.match.params.id}>
								Appointment
							</a>
						</li>
						<li>
							<a href={"/TourguideHomepage/" + this.props.match.params.id}>
								Guide
							</a>
						</li>
						<li>
							<a href='/Payment'>Payment</a>
						</li>
						<li>
							<a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
						</li>
						<li>
							<a href={"/VehicleHomePage/" + this.props.match.params.id}>
								Vehicle
							</a>
						</li>
						<li>
							<a
								href={
									"/AyurvedicTreatmentHomePage/" + this.props.match.params.id
								}>
								Treatement
							</a>
						</li>
						<li>
							<a href='/AdminRegisterViewTable'>Tourist</a>
						</li>
						<li>
							<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
								Experiance
							</a>
						</li>
					</ul>
					<div className='profile'>
						<img src={image} alt='' srcset='' />
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
				{/* <a href = {"/AyurvedicTreatmentHomePage/"+this.props.match.params.id}>Treatement</a>
      <a href = {"/VehicleHomePage/"+this.props.match.params.id}>Vehicle</a>
      <a href = {"/RoomHomePage/"+this.props.match.params.id}>Room</a>
      <a href = {"/TourguideHomepage/"+this.props.match.params.id}>Guide</a>
      <a href = {"/appointmentHomepage/"+this.props.match.params.id}>Appointment</a>
      <a href = {"/HotelHomepage/"+this.props.match.params.id}>hotel</a>
      <a href = {"/ExperienceHomepage/"+this.props.match.params.id}>Experiance</a> */}

				<img src={img} alt='' srcset='' className='vehicle-banner' />
				<div className='SearchBar'>
					<input type='text' name='' id='' placeholder='Search...' />
					<input type='text' placeholder='Type...' />
					<input type='text' placeholder='Location...' />
					<button type='submit'> Search </button>

					<div className='top-footer'>
						<div className='col-img'>
							<img src='' width='400' />
							<h4>Add Vehicle</h4>
						</div>
					</div>
				</div>
				<button className='orderButton'>
					<a href={"/myvehicleoder/" + this.props.match.params.id}>
						Order Now !
					</a>
				</button>

				<Footer />
			</div>
		);
	}
}

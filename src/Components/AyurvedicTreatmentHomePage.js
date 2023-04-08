import React, { Component } from "react";
import Treatment from "./TreatmentCard";
import "../Styles/AyurvedicTreatmentHomePage.css";
import NavBarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class AyurvedicTreatmentHomePage extends Component {
	constructor(props) {
		super(props);
		// this.state = { vehicleOder: [],
		//   search: "" ,
		//   email : this.props.match.params.id
		//  };
	}
	render() {
		return (
			<div className='AyurvedicTreatmentHomePage'>
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
					<a href={"/profiletablerow/" + this.props.match.params.id}><img src={image} alt='' srcset='' /></a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
						
					</div>
				</nav>

				<div className='top'>
					<p className='sentence'>
						What type of treatment are you looking for?
					</p>
					<div className='button-set'>
						<button>Book and Appointment</button>
						<br />
						<button>My Appointment</button>
						<br />
						<button>SignOut</button>
						<br />
					</div>
				</div>
				<div className='bottom'>
					<div className='treatmentCards'>
						<div className='treatmentCard'>
							<Treatment />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

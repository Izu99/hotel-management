import React, { Component } from "react";
import "../Styles/VehicleHomePage.css";
import img from "../images/vehicle0.jpg";
// import NavBarHome from './NavBar_home'
import Footer from "./Footer";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";
import "../Styles/VehicleCard.css";
import img1 from "../images/vehicle1.jpg";
import img2 from "../images/vehicle2.jpg";
import img3 from "../images/vehicle3.jpg";

export default class VehicleHomepage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const vehicles = [
			{
				id: 1,
				type: "Scooter",
				title: "Scooter",
				description: "Description 1",
				img: img1,
			},
			{
				id: 2,
				type: "Tuktuk",
				title: "Tuktuk",
				description: "Description 2",
				img: img2,
			},
			{
				id: 3,
				type: "Car",
				title: "Car",
				description: "Description 3",
				img: img3,
			},
		];
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
						<a href={"/Payment/" + this.props.match.params.id}>Payment</a>
							{/* <a href='/Payment'>Payment</a> */}
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
						
						<a href={"/index/" + this.props.match.params.id}>
								{/* Experiance */}<img src={image} alt='' srcset='' />
							</a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
			

				<img src={img} alt='' srcset='' className='vehicle-banner' />
				<div className='SearchBar'>
					<input type='text' name='' id='' placeholder='Search...' />
					<input type='text' placeholder='Type...' />
					<input type='text' placeholder='Location...' />
					<button type='submit'> Search </button>

					<div className='top-footer'>
						{/* <div className='col-img'>
							<img src='' width='400' />
							<h4>Add Vehicle</h4>
						</div> */}
					</div>
				</div>
				<div className='vehicleCardContainer'>
					{vehicles.map((vehicle) => (
						<div key={vehicle.id} className='vehicleCard'>
							<div className='top'>
								<img src={vehicle.img} alt='' />
							</div>
							<div className='bottom'>
								<p className='title'>{vehicle.title}</p>
								{/* <a href={"/myvehicleoder/"+this.props.match.params.id}>Order Now!</a> */}
								{/* <a href={`/myvehicleoder/${match?.params?.id}`}>Order Now!</a> */}
								<button className='orderButton'>
									<a href={"/myvehicleoder/" + this.props.match.params.id}>
										Order Now !
									</a>
								</button>
							</div>
						</div>
					))}
				</div>

				<Footer />
			</div>
		);
	}
}

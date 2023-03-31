import React from "react";
import "../Styles/NavBar_home.css";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

function NavbarHome() {
	return (
		<nav>
			<div className='logo'>
				<a href='/'>
					<img src={logo} alt='' srcset='' />
				</a>
			</div>
			<ul className='nav-links'>
				<li>
					<a href='/special-packages'>Hotel</a>
				</li>
				<li>
					<a href='/'>Tour</a>
				</li>
				<li>
					<a href='/Payment'>Payment</a>
				</li>
				<li>
					<a href='/our-services'>Destination</a>
				</li>
				<li>
					<a href='/VehicleHomePage'>Vehicle</a>
				</li>
				<li>
					<a href='/'>Treatment</a>
				</li>
				<li>
					<a href='/special-packages'>Advertising</a>
				</li>
				<li>
					<a href='/features'>Experience</a>
				</li>
			</ul>
			<div className='profile'>
				<img src={image} alt='' srcset='' />
				<i class='fa-solid fa-ellipsis-vertical'></i>
			</div>
		</nav>
	);
} 

export default NavbarHome;
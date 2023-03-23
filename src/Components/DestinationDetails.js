import React from "react";
import "../Styles/DestinationDetails.css";
import MapLocation from "./Map";
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";

function DestinationDetails() {
	return (
		<div>
			<NavbarHome />
			<div className='destinationDetails'>
				<div className='left-panel'>
					<h2>Details</h2>
					<ul>
						<li>Detail</li>
						<li>Detail</li>
						<li>Detail</li>
						<li>Detail</li>
						<li>Detail</li>
					</ul>
				</div>
				<div className='right-panel'>
					<MapLocation />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default DestinationDetails;

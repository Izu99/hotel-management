import React from "react";
import "../Styles/VehicleCard.css";
import img1 from "../images/vehicle1.jpg";
import img2 from "../images/vehicle2.jpg";
import img3 from "../images/vehicle3.jpg";
import img4 from "../images/vehicle4.jpg";
import img5 from "../images/vehicle5.jpg";
import img6 from "../images/vehicle6.jpg";

function VehicleCard() {
	const vehicles = [
		{ id: 1, title: "Title 1", description: "Description 1", img: img1 },
		{ id: 2, title: "Title 2", description: "Description 2", img: img2 },
		{ id: 3, title: "Title 3", description: "Description 3", img: img3 },
		{ id: 4, title: "Title 4", description: "Description 1", img: img4 },
		{ id: 5, title: "Title 5", description: "Description 2", img: img5 },
		{ id: 6, title: "Title 6", description: "Description 3", img: img6 },
	];

	return (
		<div className='vehicleCardContainer'>
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img1} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img2} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img3} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
			<br /><br />
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img4} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img5} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
			<div className='vehicleCard'>
				<div className='top'>
					<img src={img6} alt='' />
				</div>
				<div className='bottom'>
					<p className='title'>title</p>
					<p className='description'>description</p>
					<button type='submit'>View</button>
				</div>
			</div>
		</div>
	);
}

export default VehicleCard;

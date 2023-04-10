import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

const Rooms = ({ name, description, image, defaultRating }) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='room'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				{/* <RatingStar selected={rating} onClick={handleRatingSelect} /> */}

				{/* <button className='orderButton'>
						<a href={"/myvehicleoder/" + this.props.match.params.id}>
							Order Now !
						</a>
					</button>  */}
			</div>
		</div>
	);
};

class RoomHomepage extends Component {
	render() {
		return (
			<div>
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
								Experience
							</a>
						</li>
					</ul>
					<div className='profile'>
						<img src={image} alt='' srcset='' />
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
				<div className='right'>
					<div className='hotel-details'>
						<Rooms
							name='Standard Rooms'
							description="Description: Our cozy standard rooms are perfect for travelers who value comfort and affordability. These rooms are equipped with all the basic amenities you need for a comfortable stay, including a comfortable bed, a private bathroom, and a work desk."
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Rooms
							name='Standard Rooms'
							description='Description: Our spacious executive rooms are designed for business travelers or anyone looking for a little extra space and luxury. These rooms feature a king-size bed, a separate sitting area, and a well-appointed bathroom with a spa bath.'
							image='https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg'
							// defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>

					<div className='hotel-details'>
						<Rooms
							name='Deluxe Suites'
							description='Description: Our spacious executive rooms are designed for business travelers or anyone looking for a little extra space and luxury. These rooms feature a king-size bed, a separate sitting area, and a well-appointed bathroom with a spa bath.'
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={3}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					
					

				</div>
			</div>
		);
	}
}

export default RoomHomepage;

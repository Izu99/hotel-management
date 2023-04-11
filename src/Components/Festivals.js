import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

// import "../Styles/NavBar_home.css";
import RatingStar from "./RatingStar";
import "../Styles/Festivals.css";
import Footer from "../Components/Footer";

const Festivals = ({ name, description, image, defaultRating }) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='hotel'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				<RatingStar selected={rating} onClick={handleRatingSelect} />

				{/* <button className='orderButton'>
						<a href={"/myvehicleoder/" + this.props.match.params.id}>
							Order Now !
						</a>
					</button>  */}
			</div>
		</div>
	);
};

export default class HotelHomepage extends Component {
	render() {
		return (
			<div className='HotelHomePage'>
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
							<a href={"/destinations/" + this.props.match.params.id}>
								Destination
							</a>
						</li>
						<li>
							<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
								Experience
							</a>
						</li>
					</ul>
					<div className='profile'>
						<a href={"/index/" + this.props.match.params.id}>
							{/* Experience */}
							<img src={image} alt='' srcset='' />
						</a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>

				<div className='right'>
					<div className='hotel-details'>
						<Festivals
							name='Duruthu Perahera'
							description="A religious festival in Sri Lanka featuring a grand procession of dancers, musicians, and elephants..."
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={5}
                            date='January'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name='Thai Pongal'
							description='A four-day harvest festival celebrated by Tamil people worldwide, featuring rice, milk, and sugarcane offerings...'
							image='https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg'
							// defaultRating={5}
                            date='January'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>

					<div className='hotel-details'>
						<Festivals
							name='Independence Day'
							description='Sri Lankan national holiday commemorating independence from British colonial rule on February 4, 1948, celebrated annually'
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={3}
                            date='February 04'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name=' Navam Perahera'
							description='An annual Buddhist festival in Colombo, Sri Lanka, featuring a grand procession of elephants, dancers, and musicians'
							image='https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg'
							// defaultRating={5}
                            date='February'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name=' Mahashivratri'
							description='A Hindu festival dedicated to Lord Shiva celebrated annually on March 1, 2022, with fasting, prayers, and offerings of fruits and flowers.'
							image='https://media.timeout.com/images/101853195/image.jpg'
							// defaultRating={4}
                            date='February'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name='Love Sri Lanka Festival'
							description='A week-long cultural festival celebrating Sri Lankan music, dance, cuisine, and art'
							image='https://www.bookingsrilanka.com/wp-content/uploads/2019/08/hotel-j-ambalangoda-1.jpg'
							// defaultRating={5}
                            date='February 14'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
                    <div className='hotel-details'>
						<Festivals
							name='Sinhala & Tamil New Year'
							description="A national holiday marking the Sinhalese and Tamil New Year with traditional customs, games, and food..."
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={5}
                            date='April 14'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name='Vesak Poya'
							description='A significant day for Buddhists worldwide, commemorating Buddha birth and enlightenment, celebrated through various religious rituals and practices.'
							image='https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg'
							// defaultRating={5}
                            date='May'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>

					<div className='hotel-details'>
						<Festivals
							name='Poson Festival'
							description='A Buddhist festival commemorating the introduction of Buddhism to Sri Lanka with pilgrimages, offerings, and religious rituals'
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							// defaultRating={3}
                            date='February 04'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name=' Navam Perahera'
							description='An annual Buddhist festival in Colombo, Sri Lanka, featuring a grand procession of elephants, dancers, and musicians'
							image='https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg'
							// defaultRating={5}
                            date='February'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name=' Mahashivratri'
							description='A Hindu festival dedicated to Lord Shiva celebrated annually on March 1, 2022, with fasting, prayers, and offerings of fruits and flowers.'
							image='https://media.timeout.com/images/101853195/image.jpg'
							// defaultRating={4}
                            date='February'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Festivals
							name='Love Sri Lanka Festival'
							description='A week-long cultural festival celebrating Sri Lankan music, dance, cuisine, and art'
							image='https://www.bookingsrilanka.com/wp-content/uploads/2019/08/hotel-j-ambalangoda-1.jpg'
							// defaultRating={5}
                            date='February 14'
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

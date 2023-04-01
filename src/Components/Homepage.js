import React from "react";
import "../Styles/Homepage.css";
import Slider from "./Slider";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
import Slideshow from "./SlideShow";

function Homepage() {
	return (
		<div className='homePage'>
			<NavBarHome />
			<Slideshow />
			<div className='container'>
				<div className='left-1'>
					<h2>
						Our Hot <span>Features</span>{" "}
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						faucibus ex eget turpis feugiat, vel placerat elit eleifend.
						Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
						purus tincidunt, volutpat risus ut, dictum lacus.
					</p>
					<button className='details-button'>more details{">>"}</button>
				</div>
				<div className='middle-1'>
					<div className='image-container'>
						<img
							src='https://i.pinimg.com/736x/e5/18/72/e51872b043388d3ea35a2ff2b867b0c3.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://traveldigg.com/wp-content/uploads/2016/06/Grand-Canyon-River-Boating.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
				<div className='right-1'>
					<div className='image-container'>
						<img
							src='https://ww1.prweb.com/prfiles/2005/11/23/314781/footfantasyCROP.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://m.psecn.photoshelter.com/img-get2/I0000s7onSH.Lg3I/fit=1000x750/Sigiriya-Rock-Fortress-tourists-walking-through-the-Royal-Gardens-Sri-Lanka.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
			</div>

			<div className='hr-line'></div>

			<div className='container'>
				<div className='left-2'>
					<div className='image-container'>
						<img
							src='https://www.myflightzone.com.au/images/activities/48042836.dsc_8696.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
					<div className='image-container'>
						<img
							src='http://www.grandfathergames.com/wp-content/uploads/2021/01/maldives-1024x683.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>

				<div className='middle-2'>
					<div className='image-container'>
						<img
							src='https://www.srilankatravelandtourism.com/activities-sri-lanka/railway-sri-lanka/train-tours-images/train-tours-8-sri-lanka.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://thumbs.dreamstime.com/b/adventurous-white-water-rafting-kelani-river-kitulgala-sri-lanka-adventurous-white-water-rafting-kelani-river-kitulgala-sri-188450502.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
				<div className='right-2'>
					<h2>
						Our Hot <span>Packages</span>{" "}
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						faucibus ex eget turpis feugiat, vel placerat elit eleifend.
						Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
						purus tincidunt, volutpat risus ut, dictum lacus.
					</p>
					<button className='details-button'>more details{">>"}</button>
				</div>
			</div>

			<div className='hr-line'></div>

			<div className='container'>
				<div className='left-1'>
					<h2>
						<span>Become a Sevice Provider</span>{" "}
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						faucibus ex eget turpis feugiat, vel placerat elit eleifend.
						Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
						purus tincidunt, volutpat risus ut, dictum lacus.
					</p>
					<button className='details-button'>more details{">>"}</button>
				</div>
				<div className='middle-1'>
					<div className='image-container'>
						<img
							src='https://srilankabrief.org/wp-content/uploads/2017/05/Sri-Lanka-Tourism-768x422.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img
							src='https://artoftravel.com.pk/wp-content/uploads/2017/08/Untitled-design-1.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
				<div className='right-1'>
					<div className='image-container'>
						<img
							src='https://www.onlanka.com/wp-content/uploads/2017/09/sri-lanka-tourism.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
					<div className='image-container'>
						<img
							src='https://d3k9ljo62xl25w.cloudfront.net/media/images/SriLanka_Desktop_TeaPlantation.width-800.jpg'
							alt='placeholder'
							className='image'
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Homepage;

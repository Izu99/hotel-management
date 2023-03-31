import React from "react";
import "../Styles/Homepage.css";
import Slider from "./Slider";
import plan1 from "../images/plan-1.jpg";
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
						<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img src={plan1} alt='placeholder' className='image' />
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
						<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
						<img src={plan1} alt='placeholder' className='image' />
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
					<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
					<div className='image-container'>
					<img src={plan1} alt='placeholder' className='image' />
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
						<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
					<img src={plan1} alt='placeholder' className='image' />
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
			</div>

			<div className='hr-line'></div>

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
						<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>

					<div className='image-container'>
					<img src={plan1} alt='placeholder' className='image' />
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
						<img src={plan1} alt='placeholder' className='image' />
						<p>
							 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							faucibus ex eget turpis feugiat, vel placerat elit eleifend.
							Praesent hendrerit dolor sed mauris posuere tincidunt. Donec eget
							purus tincidunt, volutpat risus ut, dictum lacus.
						</p>
					</div>
					<div className='image-container'>
					<img src={plan1} alt='placeholder' className='image' />
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

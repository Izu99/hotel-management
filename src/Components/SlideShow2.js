import React, { useState, useEffect } from "react";
import "../Styles/SlideShow.css";
// import img01 from '../images/vehicle0.jpg'
// import img02 from '../images/vehicle1.jpg'
// import img03 from '../images/vehicle2.jpg'
// import img1 from 'https://topyourtravel.com/images/images/68.jpg'

function Slideshow2() {
	const [slideIndex, setSlideIndex] = useState(1);

	useEffect(() => {
		autoShowSlides();
	}, []);

	function plusSlides(n) {
		showSlides(slideIndex + n);
	}

	function currentSlide(n) {
		showSlides(n);
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			setSlideIndex(1);
		} else if (n < 1) {
			setSlideIndex(slides.length);
		} else {
			setSlideIndex(n);
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}

	let autoSlideIndex = 0;

	function autoShowSlides() {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		autoSlideIndex++;
		if (autoSlideIndex > slides.length) {
			autoSlideIndex = 1;
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[autoSlideIndex - 1].style.display = "block";
		dots[autoSlideIndex - 1].className += " active";
		setTimeout(autoShowSlides, 8000); // Change images every 8 seconds
	}

	return (
		<div className='slideshow-container'>
			<div className='mySlides fade'>
				<img
					src='https://magnificentonline.com/wp-content/uploads/2018/08/Sri-lanka-e1533609271739.jpg'
					alt=''
				/>
				{/* <div className="text">Title One</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://www.travelwithdearsrilanka.com/wp-content/uploads/2020/05/pinnawala-10.jpg'
					alt=''
				/>
				{/* <div className="text">Title Two</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='http://3.bp.blogspot.com/-BURIMsFj7bs/U_hScuNZ9JI/AAAAAAAABT8/-d32l6uHxEE/w1200-h630-p-k-no-nu/sri_lanka_strand_boote-header.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://www.thrillophilia.com/blog/wp-content/uploads/2017/11/Nuwara-Eliya.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://thegirlborntotravel.com/wp-content/uploads/2019/04/beautiful-places-in-sri-lanka.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://i.ytimg.com/vi/wdHXOtsT_Fk/maxresdefault.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://s20426.pcdn.co/wp-content/uploads/2018/11/iStock-870378096-e1544710804582-1600x800.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://imgix.bustle.com/elite-daily/2015/07/06025354/elitedaily_KristenCurrette_travel.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<div className='mySlides fade'>
				<img
					src='https://tbcblogtours.com/wp-content/uploads/2019/06/Adventure-Travel.jpg'
					alt=''
				/>
				{/* <div className="text">Title Three</div> */}
				{/* <p>Discription</p> */}
			</div>

			<a className='prev' onClick={() => plusSlides(-1)}>
				&#10094;
			</a>
			<a className='next' onClick={() => plusSlides(1)}>
				&#10095;
			</a>

			<br />

			<div style={{ textAlign: "center" }}>
				<span className='dot' onClick={() => currentSlide(1)}></span>
				<span className='dot' onClick={() => currentSlide(2)}></span>
				<span className='dot' onClick={() => currentSlide(3)}></span>
				<span className='dot' onClick={() => currentSlide(4)}></span>
				<span className='dot' onClick={() => currentSlide(5)}></span>
				<span className='dot' onClick={() => currentSlide(6)}></span>
				<span className='dot' onClick={() => currentSlide(7)}></span>
				<span className='dot' onClick={() => currentSlide(8)}></span>
				<span className='dot' onClick={() => currentSlide(9)}></span>
				<span className='dot' onClick={() => currentSlide(10)}></span>
			</div>
		</div>
	);
}

export default Slideshow2;
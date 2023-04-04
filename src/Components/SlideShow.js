import React, { useState, useEffect } from "react";
// import "../Styles/SlideShow.css";
import img01 from "../images/slideshow1.jpg";
import img02 from "../images/slideshow2.jpg";
import img03 from "../images/slideshow3.jpg";
import img04 from "../images/slideshow4.jpg";
import img05 from "../images/slideshow5.jpg";
import img06 from "../images/slideshow6.jpg";

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

	function autoShowSlides() {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		let autoSlideIndex = slideIndex; // start from the current slide index
		setInterval(() => {
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
			setSlideIndex(autoSlideIndex);
		}, 8000); // Change images every 8 seconds
	}

	return (
		<div className='slideshow-container'>
			<div className='mySlides fade'>
				<img src={img01} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={img02} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={img03} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={img04} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={img05} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={img06} alt='' />
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
			</div>
		</div>
	);
}

export default Slideshow2;

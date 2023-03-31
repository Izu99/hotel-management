import React from "react";
import "../Styles/NavBar_home.css";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import { withRouter } from 'react-router-dom';


// function NavbarHome() {
	class NavigationBar extends React.Component {

	// eslint-disable-next-line no-undef
	handleNavigation = () => {
		const { id } = this.props.match.params; // retrieve the id from the URL params
		this.props.history.push('/index/' + id);
	  };
	  render() {
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
					<a href='/AyurvedicTreatmentHomePage'>Treatment</a>
				</li>
				<li>
					<a href='/special-packages'>Advertising</a>
				</li>
				<li>

					<a href='/features'>Experience</a>
				</li>
			</ul>
			<div className='profile'>
          <a href={`/index/${this.props.match.params.id}`}>
            <img src={image} alt='' srcset='' onClick={this.handleNavigation} />
          </a>
          <i class='fa-solid fa-ellipsis-vertical'></i>
        </div>
		</nav>
	);
} }

export default withRouter(NavigationBar);
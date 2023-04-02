import React from "react";
import "../Styles/NavBar_home.css";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import { withRouter, NavLink } from "react-router-dom";

class NavigationBar extends React.Component {
	handleNavigation = () => {
		const { id } = this.props.match.params;
		this.props.history.push("/index/" + id);
	};

	render() {
		return (
			<nav>
				<div className='logo'>
					<NavLink to='/'>
						<img src={logo} alt='' srcset='' />
					</NavLink>
				</div>
				<ul className='nav-links'>
					<li>
						<NavLink exact to='/HotelSearch' activeClassName='active'>
							Hotel
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/' activeClassName='active'>
							Tour
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/Payment' activeClassName='active'>
							Payment
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/our-services' activeClassName='active'>
							Destination
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/VehicleHomePage' activeClassName='active'>
							Vehicle
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/AyurvedicTreatmentHomePage'
							activeClassName='active'>
							Treatment
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/special-packages' activeClassName='active'>
							Advertising
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/features' activeClassName='active'>
							Experience
						</NavLink>
					</li>
				</ul>
				<div className='profile'>
					<NavLink to={`/index/${this.props.match.params.id}`}>
						<img src={image} alt='' srcset='' onClick={this.handleNavigation} />
					</NavLink>
					<i className='fa-solid fa-ellipsis-vertical'></i>
				</div>
			</nav>
		);
	}
}

export default withRouter(NavigationBar);

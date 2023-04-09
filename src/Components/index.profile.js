import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import "../Styles/IndexProfile.css";
import {Link} from 'react-router-dom'

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			countryCode: "",
			phoneNu: "",
			nic: "",
			address: "",
			nationality: "",
			country: "",
			password: "",
			cpassword: "",
			vaccine: ""
		}
	}

	componentDidMount() {
		axios
			.get('http://localhost:4000/tourist/getall/' + this.props.match.params.email)
			.then(res => {
				this.setState({
					firstName: res.data.firstName,
					lastName: res.data.lastName,
					email: res.data.email,
					countryCode: res.data.countryCode,
					phoneNu: res.data.phoneNu,
					nic: res.data.nic,
					address: res.data.address,
					nationality: res.data.nationality,
					country: res.data.country,
					password: res.data.password,
					cpassword: res.data.cpassword,
					vaccine: res.data.vaccine
				});
			})
			.catch(error => {
				console.log(error);
			});
	}
	  
		

	render() {
		return (
			<div className='indexProfile'>
				{/* <NavBarHome /> */}

				<div className='profile-top'>
					<div className='left-details'>
						<h2>Profile Details</h2>
						<div className='profile-image-container'>
							<img
								src='https://thereadtoday.com/wp-content/uploads/2020/12/solo-male-travel-800x445.jpg'
								alt='Profile'
								className='profile-image'
							/>
						</div>
					</div>
				
				</div>

				<div className='pro-details'>
					<table className="table table-striped">
						<tbody>

				<tr>
								<td style={{ fontWeight: 'bold' }}>First name</td>
								<td><input
									type="text"
									required
									value={this.state.firstName}
									disabled
								/></td>
							</tr>
							<tr>
								<td style={{ fontWeight: 'bold' }}>Last Name</td>
								<td><input
									type="text"
									required
									value={this.state.lastName}
									disabled
								/></td>
							</tr>


							<tr>
								<td style={{ fontWeight: 'bold' }}>Email</td>
								<td><input
									type="email"
									required
									value={this.state.email}
									disabled
								/></td>
							</tr>
							</tbody>
							</table>
							</div>
                 
                               
				<Footer />
			</div>
		);
	}
}



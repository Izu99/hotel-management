import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/ProfileTableRow.css";

export default class TableRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hName: this.props.obj.hName,
			address: this.props.obj.address,
			pNumber: this.props.obj.pNumber,
			email: this.props.obj.email,
			password: this.props.obj.password,
			cPassword: this.props.obj.cPassword,
		};
		this.delete = this.delete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	delete() {
		axios
			.get("http://localhost:4000/hotel/hotelDelete/" + this.props.obj._id)
			.then(this.setState({ redirect: true }))
			.catch((err) => console.log(err));

		alert("Your account was successfully deleted.");
		window.location.replace("/signIn");
	}

	render() {
		return (
			<div className='profile-container'>
				<div className='profile-header'>
					<h2 className='profile-title'>Profile Details</h2>
				</div>
				<div className='profile-content'>
					<div className='profile-image-container'>
						<img
							src='https://thereadtoday.com/wp-content/uploads/2020/12/solo-male-travel-800x445.jpg'
							alt='Profile'
							className='profile-image'
						/>
					</div>
					<div className='profile-details-container'>
						<div className='profile-details'>
							<label htmlFor='hName'>Hotel Name</label>
							<input
								type='text'
								id='hName'
								name='hName'
								value={this.state.hName}
								onChange={this.handleChange}
							/>
						</div>
						<div className='profile-details'>
							<label htmlFor='address'>Address</label>
							<input
								type='text'
								id='address'
								name='address'
								value={this.state.address}
								onChange={this.handleChange}
							/>
						</div>
						<div className='profile-details'>
							<label htmlFor='pNumber'>Phone Number</label>
							<input
								type='text'
								id='pNumber'
								name='pNumber'
								value={this.state.pNumber}
								onChange={this.handleChange}
							/>
						</div>
						<div className='profile-details'>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								id='email'
								name='email'
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
						<div className='profile-details'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								name='password'
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div className='profile-details'>
							<label htmlFor='cPassword'>Confirm Password</label>
							<input
								type='password'
								id='cPassword'
								name='cPassword'
								value={this.state.cPassword}
								onChange={this.handleChange}
							/>
						</div>
					</div>
				</div>
				<div className='profile-actions'>
               <button>
                  <Link to={"/edit/" + this.props.obj._id} className='btn btn-success'>
						Edit
					</Link>
               </button>
					
					<button onClick={this.delete} className='btn btn-danger'>
						Delete Account
					</button>
				</div>
			</div>
		);
	}
}

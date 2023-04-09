import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import TableRow from "./profileTableRow";
import "../Styles/IndexProfile.css";

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { Customer: [] };
		// this.state.Email = this.props.match.params.id;

		//const Email = this.props.match.params.id;
	}

	componentDidMount() {
		//  alert('Username is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/tourist/getall/" + this.props.match.params.id)
			.then((response) => {
				alert("Pass una");
				// alert('Data Tika :'+response.data)
				this.setState({ Customer: response.data });
			})
			.catch(function (error) {
				console.log(error);
			  alert("Pass unana");
			});
	}
	tabRow() {
		// eslint-disable-next-line react/jsx-no-undef
		return <TableRow obj={this.state.Customer} />;
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
					<div className='right-details'>{this.tabRow()}</div>
				</div>
                               
				<Footer />
			</div>
		);
	}
}

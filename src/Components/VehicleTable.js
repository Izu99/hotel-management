import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/VehicleTable.css";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";

class TableRow extends Component {
	constructor(props) {
		super(props);
		this.deletesss = this.deletesss.bind(this);
	}
	deletesss() {
		axios
			.get("http://localhost:4000/campus/delete/" + this.props.obj._id)
			.then(this.setState({ redirect: true }))
			.catch((err) => console.log(err));
		//this.props.history.push('/index');
		//   this.props.history.push('/signIn');
		alert("Your Accout Successfully Deleted....");
		window.location.replace("/signIn");
	}
	render() {
		return (
			<div className='adminVehicleProfile'>
				<NavBar_home />
				<table>
					<head>
						<tr>
							<th>Header 1</th>
							<th>Header 2</th>
							<th>Header 3</th>
							<th>Header 4</th>
							<th>Header 5</th>
							<th>Header 6</th>
							<th >Actions</th>
						</tr>
					</head>
					<body>
						<tr>
							<td>Data 1</td>
							<td>Data 2</td>
							<td>Data 3</td>
							<td>Data 4</td>
							<td>Data 5</td>
							<td>Data 6</td>
							<div className='profile-actions'>
								<td>
									<button>
										{" "}
										<Link className='btn btn-success'>Edit</Link>
									</button>
								</td>
								<td>
									<button className='btn btn-danger'>Delete Account</button>
								</td>
							</div>
						</tr>
					</body>
				</table>

				<Footer />
			</div>
		);
	}
}

export default TableRow;

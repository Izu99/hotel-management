/* eslint-disable no-dupe-class-members */
import React, { Component } from "react";
import axios from "axios";
import NavbarHome from "./NavBar_home";
import "../Styles/Payment.css";
import Footer from "./Footer";

export default class Payment extends Component {
	constructor(props) {
		super(props);
		this.onChangecName = this.onChangecName.bind(this);
		this.onChangebName = this.onChangebName.bind(this);
		this.onChangecNumber = this.onChangecNumber.bind(this);
		this.onChangeexMonth = this.onChangeexMonth.bind(this);
		this.onChangeexpYear = this.onChangeexpYear.bind(this);
		this.onChangecvv = this.onChangecvv.bind(this);
		this.onChangecamount = this.onChangecamount.bind(this);
		// this.onChangeCampusId = this.onChangeCampusId.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			cName: "",
			bName: "",
			cNumber: "",
			exMonth: "",
			expYear: "",
			cvv: "",
			amount: "",
		};
	}
	onChangecName(e) {
		this.setState({
			cName: e.target.value,
		});
	}
	onChangebName(e) {
		this.setState({
			bName: e.target.value,
		});
	}
	// eslint-disable-next-line no-dupe-class-members
	onChangecNumber(e) {
		this.setState({
			cNumber: e.target.value,
		});
	}
	onChangeexMonth(e) {
		this.setState({
			exMonth: e.target.value,
		});
	}
	onChangeexpYear(e) {
		this.setState({
			expYear: e.target.value,
		});
	}
	onChangecvv(e) {
		this.setState({
			cvv: e.target.value,
		});
	}
	onChangecamount(e) {
		this.setState({
			amount: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			cName: this.state.cName,
			bName: this.state.bName,
			cNumber: this.state.cNumber,
			exMonth: this.state.exMonth,
			expYear: this.state.expYear,
			cvv: this.state.cvv,
			amount: this.state.amount,
		};

		if (this.state.cNumber.length >= 12) {
			if (this.state.exMonth.length === 2) {
				if (this.state.expYear.length === 2) {
					if (this.state.cvv.length === 3) {
						axios
							.post("http://localhost:4000/payment/paymentAdd", obj)
							.then((res) => {
								alert("Payment add Successfully");
								this.setState({
									cName: "",
									bName: "",
									cNumber: "",
									exMonth: "",
									expYear: "",
									cvv: "",
									amount: "",
								});
								console.log(res.data);
							});
						this.props.history.push("/signIn");
					} else {
						alert("Invalid cvv Number.. Pleace enter valid cvv number");
					}
				} else {
					alert("Invalid Year Pleace enter under 2 digits number");
				}
			} else {
				alert("Invalid Month number.. Pleace enter under 2 number.");
			}
		} else {
			alert("Pleace enter at least 12 characters for card");
		}
	}

	//front end

	render() {
		return (
			<div>
				<div className='Payment'>
					<NavbarHome />
					<form onSubmit={this.onSubmit}>
						<div className='title'>
							<p>Payment</p>
						</div>
						<div className='basic-info'>
							<label>Name of card</label>
							<input
								type='text'
								required
								placeholder='Please enter correct card name'
								value={this.state.cName}
								onChange={this.onChangecName}
							/>
						</div>

						<div className='basic-info'>
							<label>Bank Name</label>
							<input
								type='text'
								required
								placeholder='Please enter correct bank name'
								value={this.state.bName}
								onChange={this.onChangebName}
							/>
						</div>

						<div className='basic-info'>
							<label>Credit card number</label>
							<input
								type='text'
								required
								placeholder='Please enter correct Credit card number'
								value={this.state.cNumber}
								onChange={this.onChangecNumber}
							/>
						</div>

						<div className='basic-info'>
							<label>Exp month/ Year</label>

							<input
								type='month'
								required
								placeholder='Please enter correct Exp month'
								value={this.state.exMonth}
								onChange={this.onChangeexMonth}
								id='year-input'
								name='year'
							/>
						</div>
						{/* <div className='basic-info'>
							<div className='checkout'>
								<label htmlFor='checkout-day'>Exp year</label>

								<input
									type="year" 
									id='checkout-day'
									min='2020'
									max='2028'
									required
									placeholder='Please enter correct Exp year'
									value={this.state.expYear}
									onChange={this.onChangeexpYear}
								/>
							</div>
						</div> */}

						<div className='basic-info'>
							<label>CVV</label>
							<input
								type='text'
								required
								placeholder='Please enter correct CVV'
								value={this.state.cvv}
								onChange={this.onChangecvv}
							/>
						</div>

						<div className='basic-info'>
							<label>Amount</label>
							<input
								type='text'
								required
								placeholder='Please enter correct Amount'
								value={this.state.amount}
								onChange={this.onChangecamount}
							/>
						</div>

						<button className='submit' type='submit'>
							Check Out
						</button>
					</form>
					<Footer />
				</div>
			</div>
		);
	}
}

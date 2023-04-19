import React, { Component } from "react";
import "../Styles/MyTreatmentOrder.css";
import Footer from "./Footer";
import axios from "axios";

import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderTreatement extends Component {
	constructor(props) {
		super(props);
		this.onChangeHotel = this.onChangeHotel.bind(this);
		this.onChangevehicle = this.onChangevehicle.bind(this);
		this.onChangeroom = this.onChangeroom.bind(this);
		this.onChangetreatement = this.onChangetreatement.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
      
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			Hotel: "",
			vehicle: "",
			room: "",
			treatement: "",
			Qty: "",
			status: "",
			price: "",
            email: "",
		};
		this.state.email = this.props.match.params.id;
	}

	onChangeHotel(e) {
		this.setState({
			Hotel: e.target.value,
		});
	}
	onChangevehicle(e) {
		this.setState({
			vehicle: e.target.value,
		});
	}
	onChangeroom(e) {
		this.setState({
			room: e.target.value,
		});
	}
	onChangetreatement(e) {
		this.setState({
			treatement: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}
    onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	
    

	onSubmit(e) {
		// if (this.state.treatement == "Body") {
		// 	this.state.price = this.state.Qty * 2000;
		// } else if (this.state.treatement == "Face") {
		// 	this.state.price = this.state.Qty * 1000;
		// } else if (this.state.treatement == "Foot") {
		// 	this.state.price = this.state.Qty * 1500;
		// } else if (this.state.treatement == "Neck") {
		// 	this.state.price = this.state.Qty * 2500;
		// } else if (this.state.treatement == "Full") {
		// 	this.state.price = this.state.Qty * 5000;
		// }


        
            const { Hotel, vehicle, room, treatement, Qty } = this.state;
        
            const hotelPrice = Hotel === "hbp" ? 5000 : Hotel === "hdp" ? 8000 : Hotel === "hep" ? 10000 : Hotel === "hfp" ? 15000 : 0;
            const vehiclePrice = vehicle === "vnt" ? 2000 : vehicle === "vlls" ? 4000 : vehicle === "vbm" ? 6000 : vehicle === "vmb" ? 8000 : 0;
            const roomPrice = room === "rsr" ? 5000 : room === "rdm" ? 8000 : room === "res" ? 10000 : room === "rfs" ? 15000 : room === "rhs" ? 20000 : 0;
            const treatementPrice = treatement === "Body" ? 2000 : treatement === "Face" ? 1000 : treatement === "Foot" ? 1500 : treatement === "Neck" ? 2500 : treatement === "Full" ? 5000 : 0;
        
            const total = hotelPrice + vehiclePrice + roomPrice + treatementPrice * Qty;
            this.setState({ price: total });
        
        
         

		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			Hotel: this.state.Hotel,
			vehicle: this.state.vehicle,
			room: this.state.room,
			treatement: this.state.treatement,
			Qty: this.state.Qty,
			status: this.state.status,
			price: this.state.price,
            email: this.state.email,
		};

		axios.post("http://localhost:4000/appointment/sadd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				Hotel: "",
				vehicle: "",
				room: "",
				treatement: "",
				Qty: "",
				status: "",
                price: "",
                email: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/SpecialOderView/" + this.props.match.params.id);
		//   window.location.replace('/myorder/'+this.props.match.params.id);
	}

	render() {
		return (
			<div className='MyTreatmentOrderPage'>
				<nav>
					<div className='logo'>
						<a href='/'>
							<img src={logo} alt='' srcset='' />
						</a>
					</div>
					<ul className='nav-links'>
						<li>
							<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
						</li>
						<li>
							<a href={"/appointmentHomepage/" + this.props.match.params.id}>
								Appointment
							</a>
						</li>
						<li>
							<a href={"/TourguideHomepage/" + this.props.match.params.id}>
								Guide
							</a>
						</li>
						<li>
							<a href='/Payment'>Payment</a>
						</li>
						<li>
							<a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
						</li>
						<li>
							<a href={"/VehicleHomePage/" + this.props.match.params.id}>
								Vehicle
							</a>
						</li>
						<li>
							<a
								href={
									"/AyurvedicTreatmentHomePage/" + this.props.match.params.id
								}>
								Treatement
							</a>
						</li>
						<li>
							<a href='/AdminRegisterViewTable'>Tourist</a>
						</li>
						<li>
							<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
								Experience
							</a>
						</li>
					</ul>
					<div className='profile'>
						<img src={image} alt='' srcset='' />
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
				<br />

                                

				<div className='content'>
					<form onSubmit={this.onSubmit}>
						<div className='detail'>
							<label htmlFor=''> Hotel</label>
							<select
								required
								value={this.state.Hotel}
								onChange={this.onChangeHotel}
								className='form-control'>
								<option>Choose Hotel Package</option>
								<option value='hbp'>Basic Package</option>
								<option value='hdp'>Deluxe Package</option>
								<option value='hep'>Executive Package</option>
								<option value='hfp'>Family Package</option>
								
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Vehicle</label>
							<select
								required
								value={this.state.vehicle}
								onChange={this.onChangevehicle}
								className='form-control'>
								<option>Choose Vehicle</option>
								<option value='vnt'>Normal Taxi</option>
								<option value='vlls'>Lexus LS</option>
								<option value='vbm'>BMW 7 Series</option>
								<option value='vmb'>Mercedes-Benz Sprinter</option>
							
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Room</label>
							<select
								required
								value={this.state.room}
								onChange={this.onChangeroom}
								className='form-control'>
								<option>Choose Suite</option>
								<option value='rsr'>Standard Room</option>
								<option value='rdm'>Deluxe Room</option>
								<option value='res'>Executive Suite</option>
								<option value='rfs'>Family Suite</option>
								<option value='rhs'>Honeymoon Suite</option>
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Treatement</label>
							<select
								required
								value={this.state.treatement}
								onChange={this.onChangetreatement}
								className='form-control'>
								<option>Choose Tretement</option>
								<option value='Body'>Swedish Massage</option>
								<option value='Face'>Deep Tissue Massage</option>
								<option value='Foot'>Deep Tissue Massage</option>
								<option value='Neck'>Thai Massage</option>
								<option value='Full'>Sports Massage</option>
							</select>
						</div>

						<div className='detail'>
							<label htmlFor=''> Email</label>
							<input
								type='text'
								id='vehicleName'
								name='vehicleName'
								required
								readOnly
								value={this.state.email}
								onChange={this.onChangeemail}
							/>
						</div>

						<div className='detail'>
							<label htmlFor='Qty'>Quntity</label>
							<input
								type='number'
								id='Qty'
								name='Qty'
								required
								value={this.state.Qty}
								onChange={this.onChangeQty}
							/>
						</div>

						<button type='submit'>save</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

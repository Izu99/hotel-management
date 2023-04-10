import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import "../Styles/IndexProfile.css";
import {Link} from 'react-router-dom'
import ProfileTableRow from './profileTableThrow';


export default class Index extends Component {
	constructor(props) {
		super(props);

		
			this.state = {customer : []};
			this.state.Email = this.props.match.params.id;
	
			//const Email = this.props.match.params.id;
		}
	
		componentDidMount() {
			// alert('email is ' +this.props.match.params.id);
			axios.get('http://localhost:4000/tourist/'+this.props.match.params.id)
				.then(response => {
				
					//  alert('Data Tika :'+response.data)
					this.setState({customer : response.data});
	
				})
				.catch(function (error){
					console.log(error);
					alert('Pass una')
				})
		}
		tabRow(){
				return <ProfileTableRow obj={this.state.customer}/>
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
				{this.tabRow()}
				<div className='pro-details'>
			
							</div>
                 
                               
				<Footer />
			</div>
		);
	}
}



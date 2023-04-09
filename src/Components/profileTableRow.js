import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";




export default class TableRow extends Component {
	

	constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/tourist/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
      
      alert("Your Accout Successfully Deleted....")
      window.location.replace('/');
    }
    render() {
        return (
            <div className='pro-details'>
                <table className="table table-striped">
                   <tr>
                      <td style={{fontWeight:'bold'}}>First name</td>
                      <td>{this.props.obj.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Last Name</td>
                      <td>{this.props.obj.lastName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Email</td>
                      <td>{this.props.obj.email}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Country Code</td>
                      <td>{this.props.obj.countryCode}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Phone Number</td>
                      <td>{this.props.obj.phoneNu}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Nic</td>
                      <td>{this.props.obj.nic}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Confirm Password</td>
                      <td>{this.props.obj.nationality}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Country</td>
                      <td>{this.props.obj.country}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}> Password</td>
                      <td>{this.props.obj.password}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>vaccine</td>
                      <td>{this.props.obj.vaccine}</td>
                   </tr>
                   <tr className='profile-actions'>
                      <td> <button><Link to={"/edit/"+this.props.obj._id} >Edit</Link></button></td>
                      <td><button onClick={this.delete}>Delete Account</button></td>
                   </tr>
                </table>
            </div> 

		);
		}
	}
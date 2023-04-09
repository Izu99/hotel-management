import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";




export default class TableRow extends Component {
	
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
      // alert('edit id ' +this.props.match.params.id);
      axios.get('http://localhost:4000/tourist/edit/'+this.props.match.params.id)
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
          .catch(function (error){
              console.log("Can't Get Data");
          })
  


      
  }


    render() {
        return (
            <div className='pro-details'>
                <table className="table table-striped">
                   <tr>
                      <td style={{fontWeight:'bold'}}>First name</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Last Name</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Email</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Country Code</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Phone Number</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Nic</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Confirm Password</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Country</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}> Password</td>
                      <td>{this.state.firstName}</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>vaccine</td>
                      <td>{this.state.firstName}</td>
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
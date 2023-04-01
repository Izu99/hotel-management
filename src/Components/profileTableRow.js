import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";




export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/hotel/hotelDelete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
      
      alert("Your Accout Successfully Deleted....")
      window.location.replace('/signIn');
    }
    render() {
        return (
            <div className='pro-details'>
                <table className="table table-striped">
                   <tr>
                      <td style={{fontWeight:'bold'}}>Hotel name</td>
                      <td>{this.props.obj.hName}Hotel Name</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>address</td>
                      <td>{this.props.obj.address}Address</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Phone Nu</td>
                      <td>{this.props.obj.pNumber}Phone Number</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Email</td>
                      <td>{this.props.obj.email}Email</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Password</td>
                      <td>{this.props.obj.password}Password</td>
                   </tr>
                   <tr>
                      <td style={{fontWeight:'bold'}}>Password</td>
                      <td>{this.props.obj.cPassword}Password</td>
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

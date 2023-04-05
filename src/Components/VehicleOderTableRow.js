import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class VtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/vehicle/oderdelete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/vehicleadminView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.OName}
               </td>
               <td>
                   {this.props.obj.nic}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.vehicle}
               </td>
               <td>
                   {this.props.obj.Qty}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   {this.props.obj.status}
               </td>
               <td className='profile-actions'>

                   <button><Link to={"/vehicleEdit/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default VtableRow;
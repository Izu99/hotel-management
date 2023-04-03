import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class AtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/appointment/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/AdminAppointmentViewTable');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.aID}
               </td>
               <td>
                   {this.props.obj.Name}
               </td>
               <td>
                   {this.props.obj.Treatement}
               </td>
              
               <td className='profile-actions'>

                   <button><Link to={"/EditAppointment/"+this.props.obj._id} className="btn btn-success">Edit</Link></button>
                   {/* <br/><br/> */}  &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default AtableRow;
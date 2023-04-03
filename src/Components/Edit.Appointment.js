import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';


	export default  class EditHotel extends  Component{



        constructor(props) {
            super(props);
            this.onChangeaID = this.onChangeaID.bind(this);
			this.onChangeName = this.onChangeName.bind(this);
			this.onChangeTreatement = this.onChangeTreatement.bind(this);
            
            this.onSubmit = this.onSubmit.bind(this);
        
            this.state = {
                aID: "",
				Name: "",
				Treatement: ""
             
            };
          }
    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/hotelappointment/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    aID: res.data.hName,
                    Name: res.data.address,
                    Treatement: res.data.pNumber
                   
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeaID(e) {
        this.setState({
            aID: e.target.value,
        });
      }
      onChangeName(e) {
        this.setState({
            Name: e.target.value,
        });
      }
      // eslint-disable-next-line no-dupe-class-members
      onChangeTreatement(e) {
        this.setState({
            Treatement: e.target.value,
        });
      }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            aID: this.state.aID,
            Name: this.state.Name,
            Treatement: this.state.Treatement,
         
        };
    
    	
			if (/\d/.test(this.state.Name)) {
                axios.post("http://localhost:4000/appointment/update"+this.props.match.params.id,obj)
                  .then((res) => {
                    alert(" add Successfully");
                    this.setState({
                      aID: "",
                      Name: "",
                      Treatement: ""
                    });
                    console.log(res.data);
                  });
                this.props.history.push("/");
              } else {
                alert("you can't use numbers");
              }
    
       
         
          
        
      }



    render() {
	return (
        
      
            <div className='HotelRegister'>
              <NavbarHome />
              <form onSubmit={this.onSubmit}>
                <div className="title">
                  <p>Hotel Register</p>
                </div>
              <div className="basic-info">
                <label>Hotel Name</label>
                  <input type="text" value={this.state.hName} onChange={this.onChangehName}/>
              </div>  
                      
              <div className="basic-info">
                <label>Address</label>
                <input type="text" value={this.state.address} onChange={this.onChangeaddress}/>
              </div>
              
              <div className="basic-info">
                <label>Mobile Number</label>
                  <input type="text" value={this.state.pNumber} onChange={this.onChangepNumber}/>
              </div>
      
              <div className="basic-info">
                <label>Email Address</label>
                  <input type="email" value={this.state.email} onChange={this.onChangeemail}/>
              </div>
      
              <div className="basic-info">
                <label>Password</label>
                  <input type="password" value={this.state.password} onChange={this.onChangepassword}/>
              </div>
      
              <div className="basic-info">
                <label>Confirm password</label>
                  <input type="password" value={this.state.cPassword} onChange={this.onChangecPassword}/>
              </div>
              
                  
              <button className='submit' type="submit">Update</button>
            </form>
            <Footer />
          </div>
              
        );
}
	}

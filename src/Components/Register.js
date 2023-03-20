import React from 'react';
import '../Styles/Register.css'
import NavbarLogin from './NavBar_login';
import Footer from './Footer';

class RegisterPage extends React.Component {
  render() {
    return (
        
      <div className="Register-page">
        
        < NavbarLogin />
        <div className="content">
            <form>
            
                <h2>Create Account</h2>
                <div className="form-row name">
                <div className="form-group">
                    {/* <label htmlFor="firstName">First Name</label> */}
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="lastName">Last Name</label> */}
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                </div>
                <div className="form-row phone">
                <div className="form-group">
                    <p className="country-code">+</p>
                    <input type="text" className="form-control country-code" placeholder="Country Code" required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control phone-number" placeholder="Phone Number" required />
                </div>
                </div>

                <div className="form-row">
                <div className="form-group">
                    {/* <label htmlFor="idNumber">ID Number or Passport Number</label> */}
                    <input type="text" className="form-control" id="idNumber" placeholder="Enter your ID/Passport No." required />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="address">Address</label> */}
                    <textarea className="form-control" id="address" placeholder="Enter your address" rows="3" required></textarea>
                </div>
                </div>
                <div className="form-row country-row">
                <div className="form-group">
                    {/* <label htmlFor="nationality">Nationality</label> */}
                    <input type="text" className="form-control" id="nationality" placeholder="Enter your nationality" required />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="country">Country</label> */}
                    <input type="text" className="form-control" id="country" placeholder="Enter your country" required />
                </div>
                </div>
                <div className="form-row vaccinate" >
                <div className="form-group">
                    <label htmlFor="vaccinated" className='vaccinated'>Are you vaccinated?</label>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="vaccinated" id="yes" value="yes" />
                    <label className="form-check-label" htmlFor="yes">
                        Yes
                    </label>
                    </div>
                    <div className="form-check">                        
                    <input className="form-check-input" type="radio" name="vaccinated" id="no" value="no" />
                    <label className="form-check-label" htmlFor="no">
                        No
                    </label>
                    </div>
                </div>
                </div>
                <div className="form-row password-row">
                <div className="form-group">
                    <input type="text" className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="confirm-password" placeholder="Confirm Password" required />
                </div>
                </div>
                <div className="form-row conditions" >
                <div className="form-group">
                    <input type="checkbox" name="agree" id="agree" />
                    <p>I agree to all <a href="http://">conditions.</a></p>
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
            
        </div>

        < Footer /> 
       
      </div>
    );
  }
}

export default RegisterPage;
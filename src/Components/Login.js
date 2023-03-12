import React from 'react';
import '../Styles/Login.css'
import Navbar from './NavBar';
import Footer from './Footer';

class LoginPage extends React.Component {
  render() {
    return (
        
      <div className="login-page">
        
        < Navbar />
        <div className="content">
            <form>
                <h2>Login</h2>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <input type="password" id="password" name="password" placeholder="Enter your password" required />

                <button type="submit">Login</button>
            
            <p>
                <a href="#">Forgot Password?</a>
            </p>
            </form>
            
        </div>

        < Footer /> 
       
      </div>
    );
  }
}

export default LoginPage;

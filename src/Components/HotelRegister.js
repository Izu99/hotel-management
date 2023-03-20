import React, { useState } from 'react';
import '../Styles/HotelRegister.css'
import NavbarHome from './NavBar_home';
import Footer from './Footer';



function HotelRegister() {

    return (
      
      <div className='HotelRegister'>
        <NavbarHome />
        <form>
          <div className="title">
            <p>Hotel Register</p>
          </div>
        <div className="basic-info">
          <label>Hotel Name</label>
            <input type="text"/>
        </div>  
                
        <div className="basic-info">
          <label>Address</label>
            <textarea />
        </div>
        
        <div className="basic-info">
          <label>Mobile Number</label>
            <input type="text" />
        </div>

        <div className="basic-info">
          <label>Email Address</label>
            <input type="email" />
        </div>

        <div className="basic-info">
          <label>Password</label>
            <input type="password" />
        </div>

        <div className="basic-info">
          <label>Re. Address</label>
            <input type="password" />
        </div>
        
        <div className="basic-info">
          <label for="image-input">Hotel Image</label>
          <input type="file" id="image-input" name="image" accept="image/*"/>
        </div>       
        <button className='submit' type="submit">Submit</button>
      </form>
      <Footer />
    </div>
        
  );

};


export default HotelRegister
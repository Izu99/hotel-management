import React from 'react';
import '../Styles/NavBar_home.css'
import image from '../images/profile-photo.png'


function NavbarHome() {
  return (
    <nav>
      <div className="logo">
        <a href="/">Company Logo</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/special-packages">Special Packages</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/our-services">Our Services</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
      </ul>
      <div className="profile">
        <img src={image} alt="" srcset="" />
        <i class="fa-solid fa-ellipsis-vertical"></i>

      </div>
    </nav>
  );
}

export default NavbarHome;

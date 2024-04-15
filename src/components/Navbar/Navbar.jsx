import React, { useState } from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.png";
import { Link } from "react-scroll";
import menuIcon from "/src/assets/menu-icon.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'':`hide-mobile-menu`}>
        <li><Link to="home" offset={0} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="program" offset={-260}smooth={true} duration={500}>Program</Link></li>
        <li><Link to="about" offset={-150} smooth={true} duration={500}>About us</Link></li>
        <li><Link to="campus" offset={-260} smooth={true} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
        <li><button className="btn"><Link to="contact" offset={-260} smooth={true} duration={500}>Contact us</Link></button></li>
      </ul>
      <img src={menuIcon} alt="menu-bar" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;

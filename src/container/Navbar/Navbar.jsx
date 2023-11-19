import "./Navbar.css";
import React, { useState } from 'react';

import logo from '../../img/logo1.png';

import { FaBars } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);

  return (
    <div>
      <nav className='nav'>
        <img src={logo} alt="logo" />
        <ul className={`menu ${toggleMenu?'menu-active':'menu'}`}>
            <li><a href="#">home</a></li>
            <li><a href="#">about us</a></li>
            <li><a href="#">consultant</a></li>
            <li>Department
                <ul className="sub-menu">
                    <li><a href="#">neurologi&neurosurgery</a></li>
                    <li><a href="#">general medicine&diabetology</a></li>
                    <li><a href="#">urology&nephrology</a></li>
                    <li><a href="#">obstetrics&gynecology</a></li>
                    <li><a href="#">pulmonology&sleepmedicine</a></li>
                    <li><a href="#">24hrsaccident&emergencycare</a></li>
                    <li><a href="#">plastic&costmeticsurgery</a></li>
                    <li><a href="#">laparoscopic&generalsurgery</a></li>
                    <li><a href="#">dentalopd&omfs</a></li>
                </ul>
            </li>
            <li><a href="#">facilities</a></li>
            <li><a href="#">cashless insurance</a></li>
            <li><a href="#">gallery</a></li>
            <li><a href="#">contacts</a></li>
            <li className="btn" id="nav-btn-li"><a id="nav-btn" href="#">Download Brochure</a></li>
        </ul>
        {/* {
          toggleMenu? <RxCross2 className="menu-icon" onClick={()=>{setToggleMenu(false)}}/>:<FaBars className="menu-icon" onClick={()=>{setToggleMenu(true)}}/>
        } */}
        <FaBars className="menu-icon" onClick={()=>{setToggleMenu(!toggleMenu)}}/>
        
      </nav>
    </div>
  );
}

export default Navbar;

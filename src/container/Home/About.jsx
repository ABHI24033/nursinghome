import React from 'react';
import "./About.css";

import { IoIosArrowForward } from "react-icons/io";

// image
import about from "../../img/about.png";
const About = () => {
  return (
    <div>
      <div className="about">
        <h1><span>ABOUT</span> HOSPITAL</h1>
        <div className='about-image'>
            <img src={about} />
        </div>

        <div className="about-content">
            <h1>Welcome <span>to Senthil Multi Speciality Hospital.</span> </h1>
            <h4>Dear Friends & Colleagues,</h4>
            <p className='dear'>My happy greetings to all !</p>
            <p>With profound privilege, I take this opportunity to introduce our facilities, Departments & Consultants for your kind referral.</p>
            <div className='Sincerely'>
                <p>Sincerely</p>
                <p><span>Dr.C.Senthilvel</span>,M.D.,D.M., (Neuro)</p>
                <a href="#">Read More <IoIosArrowForward /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;

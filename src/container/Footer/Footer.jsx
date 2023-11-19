import React from 'react';
import './Footer.css';

// images
import footerLogo from '../../img/footerLogo.png';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-up'>
                <div className="footer-left">
                    <img src={footerLogo} alt="" />
                    <div>
                        <FaFacebookF className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaYoutube className='icon'/>
                    </div>
                    
                </div>
                <div className="footer-right">
                    <div className='conatct-us'>
                        <h1>Contact us</h1>
                        <p><b>No. 547, Perundurai Road, Erode - 11</b></p>
                        <p><span className='orange-col'>Email:</span><b>smshospital_erode@yahoo.co.in</b></p>
                        <p className='orange-col'>For Appointments Call</p>
                        <p>+91 888 30 55555</p>
                    </div>
                    <div className='useful-links'>
                        <h1>Uesful Links</h1>
                        <div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">Consultant</a></li>
                                <li><a href="#">Department</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Facilities</a></li>
                                <li><a href="#">cashless insurance</a></li>
                                <li><a href="#">gallery</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <p className='orange-col'>A 150 Bedded Multi Disciplinary Modern Hospital</p>
                    </div>
                </div>
            </div>
            <div className='footer-down'>
                <p>© 2020 - 2023 Senthil Multi Speciality Hospital. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;

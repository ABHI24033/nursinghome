import React from 'react';
import { MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
      <div>
        <p>For an Emergency Please to Contact</p>
        <h1><MdPhoneInTalk  id='phoneIcon'/>0123456789</h1>
      </div>
      <div>
        <a href="#">CONTACT US</a>
      </div>
    </div>
  );
}

export default Contact;

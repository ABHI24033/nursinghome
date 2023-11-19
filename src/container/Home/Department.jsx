import React from 'react';
import "./Home.css"
import { IoIosArrowForward } from "react-icons/io";
// images
import dept1 from '../../img/dept/dept1.png'
import dept2 from '../../img/dept/dept2.png'
import dept3 from '../../img/dept/dept3.png'
import dept4 from '../../img/dept/dept5.png'
const Department = () => {
  return (
    <div className='department'>
      <div className='department-heading'>
        <h1><span>OUR </span>DEPARTMENT</h1>
        <a href="#" className='btn'>VIEW ALL</a>
      </div>
      <div className='para'>
        <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
      </div>
      <div className="cards">
        <div className="card">
            {/* <span></span> */}
            <hr />
            <img src={dept1} alt="icon" />
            <h1>1</h1>
            <h4>Neurology</h4>
            <p>Our Hospital have two full time Neurologists. The hospital offers all...</p>
            <a href="#">Read More <IoIosArrowForward /></a>
        </div>
        <div className="card">
            {/* <span></span> */}
            <hr />
            <img src={dept2} alt="icon" />
            <h1>2</h1>
            <h4>Neurology</h4>
            <p>Our Hospital have two full time Neurologists. The hospital offers all...</p>
            <a href="#">Read More <IoIosArrowForward /></a>
        </div>

        <div className="card">
            <hr />
            <img src={dept3} alt="icon" />
            <h1>3</h1>
            <h4>Neurology</h4>
            <p>Our Hospital have two full time Neurologists. The hospital offers all...</p>
            <a href="#">Read More <IoIosArrowForward /></a>
        </div>
        <div className="card">
            {/* <span></span> */}
            <hr />
            <img src={dept4} alt="icon" />
            <h1>4</h1>
            <h4>Neurology</h4>
            <p>Our Hospital have two full time Neurologists. The hospital offers all...</p>
            <a href="#">Read More <IoIosArrowForward /></a>
        </div>
      </div>
    </div>
  );
}

export default Department;

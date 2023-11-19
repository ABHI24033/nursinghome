import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import React, { Component } from "react";
import Slider from "react-slick";

import slider1 from '../../img/slider-1.jpg'
import slider2 from '../../img/slider-2.jpeg'
import slider3 from '../../img/slider-3.jpeg'






function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" , opacity:"0.9",padding:"4rem 0.5rem", width:"2rem", zIndex:"1",marginRight:"1rem"  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" , opacity:"0.9",padding:"4rem 0.5rem", width:"2rem", zIndex:"1",marginLeft:"1rem" }}
        onClick={onClick}
      />
    );
  }

export default function Home(){
//   render() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      // autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="home">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className="slider">
          <div className="slide">
            <img src={slider1} alt="" />
            <div className="content">
                <h1>Lorem ipsum dolor sit.lorem Lorem ipsum dolor sit amet.</h1>
                
            </div>
          </div>

          <div className="slide">
            <img src={slider2} alt="" />
          </div>

          <div className="slide">
            <img src={slider3} alt="" />
          </div>
          {/* <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
// }
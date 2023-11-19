import React from 'react';
import Slider from "react-slick";
import './Testimonial.css';

import male from "../../img/picmale.jpg"
import female from "../../img/pic2female.jpg"

const Testimonial = () => {

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
          />
        );
      }
      
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
    };

    const data = [{
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "male",
    },
    {
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "male",
    },
    {
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "female",
    },
    {
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "female",
    },
    {
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "male",
    },
    {
        name: "Arun Kumar",
        describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?",
        sex: "male",
    }
    ]
    return (
        <div>



            <div className='testimonial'>
                <h1><span>CLIENT</span> TESTIMONIALS</h1>
                <Slider {...settings} className='sliderrr' >
                    {data?.map((item, index) => {
                        return (
                            
                                < div >
                            <div className=' card-testimonial'>
                                <div>
                                    <img src={item.sex==="male"?male:female} />
                                    <h4>{item.name}</h4>
                                </div>
                                <div>
                                    <p>{item.describe}</p>
                                </div>
                            </div>
                            </div>
                            // <div>
                            
                )
                    })}

                {/* <div>
                    <div className=' card-testimonial'>
                        <div>
                            <img src={male} />
                            <h4>Abhishek Kumar</h4>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' card-testimonial'>
                        <div>
                            <img src={male} />
                            <h4>Abhishek Kumar</h4>
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic alias tenetur ipsum sequi natus expedita, aliquam aspernatur sapiente, doloribus corrupti repellendus eveniet maiores, vitae consequatur cum provident nemo quam placeat delectus. Obcaecati eligendi quo et laborum sed maxime similique impedit?</p>
                        </div>
                    </div>
                </div> */}

                {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3> */}
                {/* </div> */}
            </Slider>
        </div>
        </div >
    );
}

export default Testimonial;

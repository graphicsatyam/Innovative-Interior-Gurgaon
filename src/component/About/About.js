import React from 'react'
import './About.css';

const About = () => {
  return (

    <div>
        <div className="heading" id='about'> <h2> ABOUT US </h2>  </div>

        <div className='all_img'>
            <div className='images'> <img src="/images/img2.jpg" alt=''/> </div>
            <div className='images'> <img src="/images/img3.jpeg" alt=''/> </div>
            <div className='images'> <img src="/images/img4.jpeg" alt=''/> </div>
        </div>

        <div className="paragraph"> 
        INNOVATIVE INTERIORS GURGAON : is a leading supplier of high-quality interior products in
Gurgaon, India. Our company was established with a vision to provide innovative and
modern solutions for interior design, catering to the ever-changing needs of our customers.
We are committed to delivering superior quality products and exceptional customer
service. <br></br>

        </div>
    
    <div className="button">
        <span className='custom-button'> Read More <i class="fa fa-solid fa-arrow-right fa-beat-fade"></i></span>
        </div>


    </div>    
  )
}

export default About

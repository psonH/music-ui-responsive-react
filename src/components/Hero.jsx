import React from "react";
import { Carousel } from 'rsuite';
// import banner from '../images/banner-1.jpg'

export const Hero = () => {
  return (
    <>
      <Carousel className="banner">
        <div className="hero-text py-4 py-lg-5">
                <h1>
                    Melody <br/>
                    <div className="perfect mx-2 mx-md-auto">
                        <span> The Perfect Music </span>
                    </div>
                    Welcome to Music Lovers!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felis lacinia nec et est
                </p>
                <button className="download">Download Now!</button>
        </div>
      </Carousel>
    </>
  );
};

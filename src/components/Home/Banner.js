import React from 'react';
import './Banner.css';
// import bannerimg from '../../images/firstphoto.png';
import secondimg from '../../images/secondphoto.png';

const Banner = () => {
    return (
        <div className='full-background'>
            <div className='banner-area'>
                <div className='banner-text' data-aos="fade-up">
                    <h2>Hi there!!<br /> I am <span>Mousumi Aktar</span>  <br /> Frontend developer. </h2>
                </div>
                <div data-aos="fade-right">
                    {/* <img src={bannerimg} alt="" /> */}
                    <img src={secondimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
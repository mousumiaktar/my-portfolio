import React from 'react';
import './Banner.css';
import bannerimg from '../../images/firstphoto.png';

const Banner = () => {
    return (
        <div className='full-background'>
            <div className='banner-area'>
                <div className='banner-text'>
                    <h2>Hi there, I am <span>Mousumi Aktar</span>  <br /> Frontend developer. </h2>
                </div>
                <div>
                    <img src={bannerimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
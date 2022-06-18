import React from 'react';
import myimg from '../../images/mou.png';
import './About.css';


const About = () => {
    return (
        <div id='about' className='full-background'>
            <div className='container'>
                <div className='about-area'>
                    <div data-aos="fade-right" className='about-img'>
                        <img src={myimg} alt="" />
                    </div>
                    <div data-aos="fade-left" className='about-text'>
                        <h3>About Me</h3>
                        <p>Hi I am Mousumi Aktar an innovative, enthusiastic web-developer always determined to work hard and meet tight deadlines. I am a good team player and a good listener also. I have strong technical skills in Front-end technologies and focused with Back-end technologies.</p>
                        <button className='cv-button'><a href="https://drive.google.com/file/d/1wRU4H-srA7Rks8lrxwMIwQIZFOmpO0VP/view?usp=sharing">Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
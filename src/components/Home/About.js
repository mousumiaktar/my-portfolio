import React from 'react';
import myimg from '../../images/mou.png';
import './About.css';


const About = () => {
    return (
        <div className='container'>
            <div className='about-area'>
                <div className='about-img'>
                    <img src={myimg} alt="" />
                </div>
                <div className='about-text'>
                    <h3>About Me</h3>
                    <p>Hi I am Mousumi Aktar an innovative, enthusiastic web-developer always determined to work hard and meet tight deadlines. I am a good team player and a good listener also. I have strong technical skills in Front-end technologies and focused with Back-end technologies.</p>
                    <button className='cv-button'>Download Cv</button>
                </div>
            </div>
        </div>
    );
};

export default About;
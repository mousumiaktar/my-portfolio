import React from 'react';
import myimg from '../../images/mou.png'

const About = () => {
    return (
        <div className='container'>
            <div className='about asrea'>
                <div>
                    <img src={myimg} alt="" />
                </div>
                <div>
                    <h3>About Me</h3>
                    <p>Hi I am Mousumi Aktar an innovative, enthusiastic web-developer always determined to work hard and meet tight deadlines. I am a good team player and a good listener also. I have strong technical skills in Front-end technologies and focused with Back-end technologies.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
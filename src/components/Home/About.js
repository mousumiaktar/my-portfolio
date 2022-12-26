import React from 'react';
import myimg from '../../images/mou1.png';
import './About.css';


const About = () => {
    return (
        <div id='about' className='md:py-20 lg:py-20 py-5'>
            <div className='container'>
                <div className='md:flex justify-between gap-24 items-center lg:flex lg:px-24 md:px-24 md:mx-24 lg:mx-24 px-1'>
                    <div data-aos="fade-right" className='rounded-md bg-gradient-to-r from-pink-500  p-1'>
                        <img className='md:h-80 md:w-screen' src={myimg} alt="" />
                    </div>
                    <div data-aos="fade-left" className='text-white mt-3 md:mt-0 lg:mt-0'>
                        <h3 className='border-b-4 border-gray-500 p-2 inline'>About Me</h3>
                        <p className='text-gray-400 mt-4'>Hi I am Mousumi Aktar an innovative, enthusiastic web-developer always determined to work hard and meet tight deadlines. I am a good team player and a good listener also. I have strong technical skills in Front-end technologies and focused with Back-end technologies. Always Love to learn something new.</p>
                        <hr />
                        <div>
                            <h4><span>Personal Information</span></h4>
                            <div className='md:flex items-center justify-between'>
                                <div>
                                    <p><span className='text-gray-400'>Name:</span> Mousumi Aktar</p>
                                    <p><span className='text-gray-400'>Phone:</span> +8801784056496</p>
                                    <p><span className='text-gray-400'>Email:</span> ridimarahmanmou5804@gmail.com</p>
                                </div>
                                <div>
                                    <p><span className='text-gray-400'>Nationality:</span> Bangladeshi</p>
                                    <p><span className='text-gray-400'>Language:</span> Bangali, English</p>
                                    <p><span className='text-gray-400'>Address:</span> Dinajpur, Rajshahi, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <button className='border-2 rounded hover:border-fuchsia-600 px-4 py-2 hover:bg-gradient-to-r from-pink-500 duration-3000'><a className='text-white no-underline' href="https://drive.google.com/file/d/1wRU4H-srA7Rks8lrxwMIwQIZFOmpO0VP/view?usp=sharing">Download Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
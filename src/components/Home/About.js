import React from 'react';
import myimg from '../../images/ridima1.png';
import './About.css';


const About = () => {
    return (
        <div id='about' className='md:py-20 lg:py-20 py-5'>
            <div className='container'>
                <div className='lg:grid grid-cols-2'>
                    <div data-aos="fade-right" className='p-1 '>
                        <img className='' src={myimg} alt="" />
                    </div>
                    <div data-aos="fade-left" className='text-white '>
                        <h3 className='border-b-4 border-gray-500 p-2 inline text-[#1769FF]'>About Me</h3>
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
                        <button className='border-2 rounded hover:border-blue-600 px-4 py-2 hover:bg-gradient-to-r from-[#1769FF] to-[#55ACEE] duration-3000'><a target="_blank"  className='text-white no-underline' href="https://docs.google.com/document/d/1Wrf9Xmecf-e6jVU2tT1hRo6ohu0p1Epql_Hyn1Io8rk/edit?usp=sharing">Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
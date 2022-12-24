import React from 'react';
import './Banner.css';
import secondimg from '../../images/secondphoto.png';
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <div className=' bg-black md:pb-24 lg:pb-24 pb-5 md:pt-24 lg:pt-24 pt-4'>
            <div className='container'>
                <div className='md:flex justify-around items-center lg:flex'>
                    <div className='text-white leading-10'>
                        <h5>Hi there!!</h5>
                        <h2>I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500'>Mousumi Aktar</span></h2>
                        <h3><span style={{ color: '#CA3D83', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Frontend developer!', 'Web developer!', 'React Developer!']}
                                loop={15}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h3>
                        <div className='flex mt-5'>
                            <a href='https://www.linkedin.com/in/mousumi-aktar-mou/' className='border-1 border-[#3B5999] hover:bg-[#3B5999] rounded-full p-2 mr-4 text-white'>
                                <RiLinkedinLine size={25} />
                            </a>
                            <a href='https://github.com/mousumiaktar' className='border-1 border-[#55ACEE] hover:bg-[#55ACEE] rounded-full p-2 mr-4 text-white'>
                                <FiGithub size={25} />
                            </a>
                            <a href='https://web.facebook.com/mousumiaktar.mou.7923/' className='border-1 border-[#1769FF] hover:bg-[#1769FF] rounded-full p-2 mr-4 text-white'>
                                <FaFacebookF size={25} />
                            </a>
                            <a href='https://www.instagram.com/ridimarahmanm/' className='border-1 border-[#EA4C89] hover:bg-[#EA4C89] rounded-full p-2 text-white'>
                                <FaInstagram size={25} />
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-right">
                        <img className='h-72 mt-5 md:mt-0 lg-mt-0' src={secondimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
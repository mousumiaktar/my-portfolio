import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6tvb2t9', 'template_up66n4i', form.current, 'Z5oHSaX_AojvXwLYO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='bg-[#090808] py-8'>
            <div className='container'>
                <div data-aos="fade-right" className='contact-container md:px-24 lg:px-24'>
                    <div className='contact-information'>
                        <h2 className='text-white'>Contact Me</h2>
                        <form className='mt-4'  ref={form} onSubmit={sendEmail}>
                            
                            <input type="text" name="user_name" className='form-control bg-transparent mb-4' placeholder='Enter Your Name' />
                            
                            <input type="email" name="user_email" className='form-control bg-transparent mb-4' placeholder='Enter Your Email'/>
                            
                            <textarea name="message" className='form-control mb-3 bg-transparent pb-4' placeholder='Write Your Messege'/>
                            <input type="submit" value="Send" className='border text-white py-2 px-8 rounded-md hover:bg-cyan-600 duration-500' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
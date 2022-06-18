import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contactimg from '../../images/contact.png';
import './Contact.css';

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
        <div id='contact' className='full-background'>
            <div className='container'>
                <div className='contact-container'>
                    <div className='img-background'>
                        <div className='img-information'>
                            <img src={contactimg} alt="" />
                            <div className='img-text-area'>
                                <h4><span><u>Get in touch</u></span></h4>
                                <p>Name: Mousumi Aktar</p>
                                <p>Phone: +8801784056496</p>
                                <p>Email: ridimarahmanmou5804@gmail.com</p>
                                <p>Address: Dinajpur, Rajshahi, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className='contact-information'>
                        <h2><u>Contact Me</u></h2>
                        <form className='row' style={{ margin: "25px 85px 75px 100px" }} ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" className='form-control' />
                            <label>Email</label>
                            <input type="email" name="user_email" className='form-control' />
                            <label>Message</label>
                            <textarea name="message" className='form-control mb-3' />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
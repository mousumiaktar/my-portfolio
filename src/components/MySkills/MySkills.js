import React from 'react';
import './MySkills.css';
import html from '../../images/logoicon/html.png';
import css from '../../images/logoicon/css.png';
import node from '../../images/logoicon/node.png';
import express from '../../images/logoicon/express.png';
import mongodb from '../../images/logoicon/mongodb.png';
import javascript from '../../images/technology/javascript.png';

const MySkills = () => {
    return (
        <div id='myskill'>
            <div className='container'>
            <div className='img-container'>
                <h2 className='skill-title'><u>My Skills</u></h2>
                <div data-aos="fade-left" className='frontend-skill'>
                    <div>
                        <img src={html} alt="" />
                    </div>
                    <div>
                        <img src={css} alt="" />
                    </div>
                    <div>
                        <img src={javascript} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" className='backend-skill'>
                    <div>
                        <img src={node} alt="" />
                    </div>
                    <div>
                        <img src={express} alt="" />
                    </div>
                    <div>
                        <img src={mongodb} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MySkills;
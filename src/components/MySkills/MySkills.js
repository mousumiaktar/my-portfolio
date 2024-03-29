import React from 'react';
import html from '../../images/technologies/html.png';
import css from '../../images/technologies/css.png';
import javascript from '../../images/technologies/javascript.png';
import reactImage from '../../images/technologies/react.png';
import tailwind from '../../images/technologies/tailwind.png';
import bootstrap from '../../images/technologies/bootstrap.png';
import typescript from '../../images/technologies/typescript.png';
import redux from '../../images/technologies/redux.png';
import node from '../../images/technologies/node.png';
import express from '../../images/technologies/express.png';
import mongodb from '../../images/technologies/mongodb.png';

const MySkills = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },

        {
            id: 6,
            src: bootstrap,
            title: "BootsTrap",
            style: "shadow-purple-500",
        },

        {
            id: 7,
            src: redux,
            title: "Redux",
            style: "shadow-purple-500",
        },

        {
            id: 8,
            src: node,
            title: "Node JS",
            style: "shadow-green-300",
        },
        {
            id: 9,
            src: express,
            title: "Express JS",
            style: "shadow-gray-400",
        },
        {
            id: 10,
            src: mongodb,
            title: "MongoDb",
            style: "shadow-green-600",
        },
    ];


    return (
        <div id='myskills'
            name="experience"
            className="bg-black py-22"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div data-aos="fade-right">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-[#1769FF]">
                        Experience
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div data-aos="fade-left" className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MySkills;
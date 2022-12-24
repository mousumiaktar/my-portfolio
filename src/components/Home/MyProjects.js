import React, { useEffect, useState } from 'react';
import CardProjects from './CardProjects';
import './MyProjects.css';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div id='my-projects' className='bg-black py-8'>
            <div className='container'>
                <div data-aos="fade-left" className='md:px-24 lg:px-24'>
                    <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-white'><span>Portfolio</span></h2>
                    <p className='pt-3 text-white'>Check out some of my work here</p>
                </div>
                <div data-aos="fade-right" className='projects-container mt-5 md:px-24 lg:px-24'>
                    {
                        projects.map(project => <CardProjects
                            key={project.id}
                            project={project}
                        ></CardProjects>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
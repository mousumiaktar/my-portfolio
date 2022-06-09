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
        <div id='my-projects' className='full-background'>
            <div className='container'>
                <h2 className='project-text'><span><u>My Projects</u></span></h2>
                <div className='projects-container'>
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
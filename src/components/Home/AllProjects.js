import React, { useEffect, useState } from 'react';
import ProjectDetails from '../ProjectDetails';

const AllProjects = () => {
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
                        projects.map(project => <ProjectDetails
                            key={project.id}
                            project={project}
                        ></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
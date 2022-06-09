import React from 'react';
import About from './About';
import Contact from './Contact';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div>
            <About></About>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
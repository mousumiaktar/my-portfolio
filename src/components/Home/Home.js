import React from 'react';
import Footer from '../Footer/Footer';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
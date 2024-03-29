import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-black'>
            <Navbar className='menu-bar' collapseOnSelect expand="lg" sticky='top'variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h5>Mousumi-Aktar</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='header-text'>
                            <Nav.Link style={{color:"white"}} className='menu-link' href="#about">About</Nav.Link>
                            <Nav.Link style={{color:"white"}} className='menu-link' href="#myskills">Skill</Nav.Link>
                            <Nav.Link style={{color:"white"}} className='menu-link' href="#my-projects">My-Projects</Nav.Link>
                            <Nav.Link style={{color:"white"}} className='menu-link' href="#contact">Contact</Nav.Link>
                            <Nav.Link style={{color:"white"}} className='menu-link' href="#blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='menu-bar' bg='dark' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h5>Mousumi-Aktar</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='header-text'>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#my-projects">My-Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
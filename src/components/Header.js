import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='menu-bar' bg='dark' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#about">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
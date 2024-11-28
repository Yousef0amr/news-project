
import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarComponent = () => {

    return (
        <Navbar expand="lg" className="navbar" >
            <Container >
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className='links'>
                            <Link to={'/'} className='link'>
                                Home
                            </Link>
                            <Link to={'/category/:id'} className='link'>
                                Screen Writer
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
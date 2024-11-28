import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const SectionHeader = () => {
    return (
        <> <div className='sectionHeader d-flex flex-column justify-content-center align-items-center'>
            <h2 class="section-title">Screen Writer</h2>
            <p className='mt-3'>(This section provides an eye on the latest news and releases of both cinema and drama industries)</p>
        </div>
            <div>
                <Navbar expand="lg" className="Sectionnavbar" >
                    <Container >
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <div >
                                    <Link to={'/category/:id'} className='link'>
                                        Screen Writer
                                    </Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>



    )
}

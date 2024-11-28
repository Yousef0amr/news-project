import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import DarkMode from '../darkMode/DarkMode'

export const Header = () => {
    return (
        <Row className='p-4 align-items-center'>
            <Col lg='3'>
                <ul className="list-unstyled d-flex align-items-center m-0 align-items-center">
                    <li>
                        <a href="#vdf" className='socialsIcon facebook'><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    </li>
                    <li>
                        <a href="#dg" className='socialsIcon youtube'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    </li>
                    <li>
                        <a href="#dg" className='socialsIcon instagram'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    </li>
                </ul>
            </Col>
            <Col lg='7' >
                <div className='d-flex justify-content-center'>News Project</div>
            </Col>

            <Col lg='2' sm='9'>
                <div className='d-flex'>
                    <Button variant='none' className='me-4' >English</Button>
                    <DarkMode />
                </div>
            </Col>
        </Row>
    )
}

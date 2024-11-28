import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Service = (props) => {
    return (
        <Container className='d-flex justify-content-center'>
            <div className='service'>
                <Link className='serviceIcon'>
                    <FontAwesomeIcon icon={'tv'} />
                </Link>

                <h3 className='serviceTitle'>Screen picks</h3>
                <p className='serviceSubTitle'>Top movies/shows to watch this week</p>

            </div>
            <div className='service'>
                <Link className='serviceIcon'>
                    <FontAwesomeIcon icon={'vote-yea'} />
                </Link>

                <h3 className='serviceTitle'>2 Poll</h3>
                <p className='serviceSubTitle'>Top movies/shows to watch this week</p>

            </div>
            <div className='service'>
                <Link className='serviceIcon'>
                    <FontAwesomeIcon icon={'newspaper'} />
                </Link>

                <h3 className='serviceTitle'>Script Capsules</h3>
                <p className='serviceSubTitle'>Top movies/shows to watch this week</p>

            </div>
        </Container>
    )
}

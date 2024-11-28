import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
    return (
        <footer class="bg-dark text-center mt-5">
            <div>
                <ul className="list-unstyled d-flex align-items-center m-0 align-items-center">
                    <li>
                        <a href="#vdf" className='socialsIcon facebook social-icons1'><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    </li>
                    <li>
                        <a href="#dg" className='socialsIcon youtube'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    </li>
                    <li>
                        <a href="#dg" className='socialsIcon instagram'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    </li>
                </ul>
            </div>
            <div class="copyright mt-2">&copy; 2015 Axure Themescaca</div>

        </footer>
    )
}

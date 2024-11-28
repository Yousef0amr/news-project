import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from './../../assets/wallpaperflare.com_wallpaper.jpg'
import { Link } from 'react-router-dom';
export const CategoryCard = () => {
    return (
        <div className='categoryCard mb-2 mt-2'>
            <div className='card-img'>
                <img src={img} alt='' />
                <span className='card-subCategory'>stars</span>
            </div>
            <div className='card-body'>
                <p className='title'>Movies in the desert</p>
                <div className='card-by'>
                    <span className='by'>By</span>
                    <Link to={'/author/:id'} className='link'>
                        <span className='who'>Ahmed Mohamed</span>
                    </Link>

                    <span className='date'>March 29,2032</span>
                </div>
            </div>

        </div>
    )
}

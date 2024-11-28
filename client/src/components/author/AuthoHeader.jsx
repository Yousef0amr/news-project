import React from 'react'

export const AuthoHeader = () => {
    return (
        <div className='d-flex justify-content-between align-items-center p-2'>
            <div className='d-flex align-items-center'>
                <img src='https://th.bing.com/th/id/OIP.OlYbygJPqmAr0aar6vbBbAHaHa?rs=1&pid=ImgDetMain' alt='' className='avater' />
                <h3 className='mx-3 text-blod'>Aya saber</h3>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <span>39</span>
                <span>Articles</span>
            </div>
        </div>
    )
}

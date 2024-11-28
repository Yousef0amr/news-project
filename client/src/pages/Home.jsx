import React from 'react'
import { Slider } from '../components/home/Slider'
import { Service } from '../components/home/Service'
import { Category } from '../components/category/Category'
import { ScrollRestoration } from 'react-router-dom'


export const Home = () => {
    return (
        <div className='startPage'>
            <Slider />
            <Service />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />

        </div>
    )
}

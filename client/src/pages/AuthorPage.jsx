import React from 'react'
import { AuthoHeader } from '../components/author/AuthoHeader'
import { SectionBady } from '../components/category/SectionBady'


export const AuthorPage = () => {
    return (
        <div className='startPage'>
            <AuthoHeader />
            <SectionBady />
        </div>
    )
}

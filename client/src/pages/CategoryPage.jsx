import React from 'react'
import { SectionHeader } from '../components/category/SectionHeader'
import { SectionCardInfo } from '../components/category/SectionCardInfo'
import { Row, Col } from 'react-bootstrap'
import { SectionBady } from '../components/category/SectionBady'

export const CategoryPage = () => {
    return (
        <div className='startPage'>
            <SectionHeader />
            <Row lg={3} className='mt-5'>
                <Col>
                    <SectionCardInfo />
                </Col>
            </Row>
            <SectionBady />
        </div>
    )
}


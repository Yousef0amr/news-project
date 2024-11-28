import React from 'react'
import { CategoryCard } from './CategoryCard'
import { PaginationComponent } from './Pagination'
import { Row, Col } from 'react-bootstrap'

export const SectionBady = () => {
    return (
        <>
            <Row lg={4} className='mt-5'>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
                <Col>
                    <CategoryCard />
                </Col>
            </Row>
            <PaginationComponent />
        </>
    )
}

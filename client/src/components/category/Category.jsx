import React from 'react'
import { CategoryHeader } from './CategoryHeader'
import { CategoryCard } from './CategoryCard'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Category = () => {
    return (
        <div>
            <CategoryHeader />
            <Row >
                <Col>
                    <Link to={'/article/15'} className='link-default'>
                        <CategoryCard />
                    </Link>
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

        </div>
    )
}

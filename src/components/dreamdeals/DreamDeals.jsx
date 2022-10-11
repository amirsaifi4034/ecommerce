import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { DreamDealsCard } from './DreamDealsCard'

export const DreamDeals = () => {
  return (
    
    <>
        <h1>Dream Deals</h1>
        <p>More than half  off on bestselling brands</p>
        <Container>
            <Row>
                <DreamDealsCard />
            </Row>
        </Container>
    </>
  )
}

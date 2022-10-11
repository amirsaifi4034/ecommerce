import React from 'react'
import { Col } from 'react-bootstrap'


export const DreamDealsCard = () => {
  return (
    <>
        <Col md={3}>
        <div className="dream_main">
            <img src="images/" alt="Puma shose" />
            <div className="dream_body">
                <img src="images/" alt="puma logo" />
                <h5>MIN. 50% OFF</h5>
            </div>
        </div>
        </Col>
    </>
  )
}

import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import StripCard from './StripCard';

export const HeaderStrip = () => {
  return (
    <>
        <article className="p-3 bg-dark">
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <StripCard />
                    </Col>
                    <Col sm={6}>
                        <StripCard style={{justifyContent: "end"}} />
                    </Col>
                </Row>
            </Container>
        </article>
    </>
  )
}

export default HeaderStrip

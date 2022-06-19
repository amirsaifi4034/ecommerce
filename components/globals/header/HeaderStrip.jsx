import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import StripCard from './StripCard';
import styles from "./styles/Header.module.css"
import { useState } from 'react';
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";

const stripsCardIcons = [
    {
        id: 0,
        firstDiv: <BsFacebook />,
        secondDiv: <BsTwitter />,
        thirdDiv: <FaLinkedinIn />,
        fourthDiv: <BsInstagram />
    }
]

const stripsCardText = [
    {
        id: 0,
        firstDiv: "info@gmail.com ",
        secondDiv: " | ",
        thirdDiv: "9990949278"

    }
]

export const HeaderStrip = () => {

    const [iconsRight, seticonsRight] = useState(true);

  return (
    <>
        <article className="p-3 bg-dark">
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <StripCard StripCardprops={stripsCardText}/>
                    </Col>
                    <Col sm={6}>
                        <StripCard addClasse={iconsRight ? true : false} StripCardprops={stripsCardIcons} />
                    </Col>
                </Row>
            </Container>
        </article>
    </>
  )
}

export default HeaderStrip

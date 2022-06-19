import React from 'react';
import HeaderStrip from './HeaderStrip';
import Logo from '../header/Logo';
import {Navbar, Container} from "react-bootstrap";
import HeaderMenu from './HeaderMenu';
import HeaderActionIcons from './HeaderActionIcons';

export const Header = () => {
  return (
    <>
        <HeaderStrip />
        <Navbar expand="lg" className="p-0">
          <Container fluid>
            <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <HeaderMenu />
            <HeaderActionIcons />
          </Container>
        </Navbar>
    </>
  )
}


export default Header

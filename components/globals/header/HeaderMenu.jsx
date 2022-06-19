import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

export const HeaderMenu = () => {
  return (
    <>
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Bed Frames" id="badFrames">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pillow & Bolster" id="Pillow">
                  <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Accessories" id="Pillow">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Bundles">Bundles</Nav.Link>
              </Nav>
            </Navbar.Collapse>
    </>
  )
}

export default HeaderMenu
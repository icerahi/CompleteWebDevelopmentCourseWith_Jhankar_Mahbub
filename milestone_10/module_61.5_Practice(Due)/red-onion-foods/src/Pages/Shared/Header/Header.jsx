import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../../assets/logo2.png'
const Header = () => {
    return (
        <Navbar bg="white" className="border" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} width="150" alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link color="dark" href="#home">Login</Nav.Link>
              <Nav.Link href="#link" className="btn-regular text-center text-white py-2 px-3">Sign up</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header

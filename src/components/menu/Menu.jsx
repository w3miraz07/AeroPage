import React from 'react'
import "./menu.css"
import { Navbar, Container, Nav,} from 'react-bootstrap';
import logo from "../../assets/logo.png"
import { FaCloudDownloadAlt } from "react-icons/fa";

const Menu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        <div className="download">
            <a href="#"> <FaCloudDownloadAlt className='icon' /> Download</a>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionCities from '../components/section-cities';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'



function Cities() {
  return (

    <div className="Cities">

      <Navbar bg="light" variant="light" collapseOnSelect expand="md">
        <Navbar.Brand className="menu-brand">
          <img
            className="rounded-circle profile-pic-menu"
            src={`http://localhost:5000/city/image/profilePic.jpg`}
            alt="profile pic"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/" > Home </Nav.Link>
            </Nav.Item>
            <Nav.Link href="/list-cities" > Cities </Nav.Link>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled > Album </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
              <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Header />
      <SectionCities />
      <Footer />


    </div>
  );
}

export default Cities;

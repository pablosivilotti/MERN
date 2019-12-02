import React from 'react';
import Header from '../components/header';
// import Section from './components/section';
// import Links from '../components/links';
import Footer from '../components/footer';
import SectionCreateAccount from '../components/section-createAccount';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'


function CreateAccount() {
  return (

    <div className="CreateAccount">

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
              <Nav.Link href="/cities" disabled > Album </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
              <NavDropdown.Item eventKey="disabled" disabled  >Create Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Header />
      <SectionCreateAccount />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

export default CreateAccount;

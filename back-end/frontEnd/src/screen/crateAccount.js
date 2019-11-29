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

      <Header />
      <Navbar bg="light" variant="light">
        <Nav.Item>
          <Nav.Link href="/" > Home </Nav.Link>
        </Nav.Item>
        <Nav className="mr-auto">
          <Nav.Link href="/list-cities" >List Cities</Nav.Link>
          <Nav.Item>
            <Nav.Link href="/cities" disabled > Cities Album </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
            <NavDropdown.Item eventKey="disabled" disabled  >Create Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <SectionCreateAccount />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

export default CreateAccount;

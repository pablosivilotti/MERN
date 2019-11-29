import React from 'react';
import Header from '../components/header';
import Section from '../components/section';
import Links from '../components/links';
import Footer from '../components/footer';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Home() {
  return (

    <div className="Home">

      <Header />
      <Navbar bg="light" variant="light">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled > Home </Nav.Link>
        </Nav.Item>
        <Nav className="mr-auto">
          <Nav.Link href="/list-cities" > Cities</Nav.Link>
          <Nav.Item>
            <Nav.Link href="/cities" > Album </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
            <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Section />
      <Links />
      <Footer />


    </div>
  );
}

export default Home;

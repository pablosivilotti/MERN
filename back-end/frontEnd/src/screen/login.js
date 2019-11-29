import React from 'react';
import Header from '../components/header';
// import Section from './components/section';
// import Links from '../components/links';
import Footer from '../components/footer';
import SectionLogin from '../components/section-login';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Login() {
  return (

    <div className="Login">

      <Header />
      <Navbar bg="light" variant="light">
        <Nav.Item>
          <Nav.Link href="/" > Home </Nav.Link>
        </Nav.Item>
        <Nav className="mr-auto">
          <Nav.Link href="/list-cities" >List Cities</Nav.Link>
          <Nav.Item>
            <Nav.Link href="/cities" > Cities Album </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item eventKey="disabled" disabled  >Log in</NavDropdown.Item>
            <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      <SectionLogin />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

export default Login;

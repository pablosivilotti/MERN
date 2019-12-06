import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
// import Section from './components/section';
// import Links from '../components/links';
import Footer from '../components/footer';
import SectionLogin from '../components/section-login';
// import Nav from 'react-bootstrap/Nav'
// import { Navbar } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import urlServer from '../components/constans'



function Login() {
  return (

    <div className="Login">

      {/* <Navbar bg="light" variant="light" collapseOnSelect expand="md">
        <Navbar.Brand className="menu-brand">
          <img
            className="rounded-circle profile-pic-menu"
            src={`${urlServer.urlServer}/city/image/profilePic.jpg`}
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
              <Nav.Link href="/cities" > Album </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item eventKey="disabled" disabled  >Log in</NavDropdown.Item>
              <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      <Menu />
      <Header />
      <SectionLogin />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

export default Login;

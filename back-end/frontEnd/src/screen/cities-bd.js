import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Footer from '../components/footer';
// import BackEndClient from '../client/client'
import Cities from '../redux/components/CitiesRedux'
// import Nav from 'react-bootstrap/Nav'
// import { Navbar } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import urlServer from '../components/constans'


function CitiesBD() {
  return (

    <div className="CitiesBD">

      <Menu/>
      <Header />
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

          <Nav variant="pills" defaultActiveKey="/list-cities">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/list-cities" > Cities </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled> Album </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
              <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <BackEndClient /> */}
      <Cities />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

export default CitiesBD;

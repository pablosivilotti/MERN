import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
// import BackEndClient from '../client/client'
import HelloRedux from '../redux/components/CitiesRedux'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function CitiesBD() {
  return (

    <div className="CitiesBD">

      <Header />
      <Nav variant="pills" defaultActiveKey="/list-cities">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/list-cities" >List Cities</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Cities Album
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Account" id="nav-dropdown">
          <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
          <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <BackEndClient /> */}
      <HelloRedux />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

 export default CitiesBD;

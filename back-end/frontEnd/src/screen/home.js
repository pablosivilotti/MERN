import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import Section from '../components/section';
import Links from '../components/links';
import Footer from '../components/footer';
// import Nav from 'react-bootstrap/Nav'
// import { Navbar } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import urlServer from '../components/constans'


function Home() {
  return (

    <div className="Home">

      <Menu/>
      <Header />
      <Section />
      <Links />
      <Footer />


    </div>
  );
}

export default Home;

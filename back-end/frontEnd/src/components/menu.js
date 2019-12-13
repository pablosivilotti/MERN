import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import urlServer from '../components/constans'


class Menu extends React.Component {

    render() {
        const profilePic = 'profilePic.jpg'
        return (
            <div>
                <Navbar bg="light" variant="light" collapseOnSelect expand="md">
                    <Navbar.Brand className="menu-brand">
                        <img
                            className="rounded-circle profile-pic-menu"
                            src={`${urlServer.urlServer}/city/image/${profilePic}`}
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
                                <NavDropdown.Item href="/login" >Log in</NavDropdown.Item>
                                <NavDropdown.Item href="/createAccount" >Create Account</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Menu;
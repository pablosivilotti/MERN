import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import urlServer from '../components/constans'
import { connect } from "react-redux";
import * as actions from "../redux/actions/accountActions";



class Menu extends React.Component {

    render() {
        var profilePic = `${urlServer.urlServer}/city/image/profilePic.jpg`

        if (localStorage.getItem('photo')) {
            profilePic = localStorage.getItem('photo')

            return (
            <div>
                <Navbar bg="light" variant="light" collapseOnSelect expand="md">
                    <Navbar.Brand className="menu-brand">
                        <img
                            className="rounded-circle profile-pic-menu"
                            src={profilePic}
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
                                <NavDropdown.Item href="/logout" >Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>);
        }

        // console.log("photo local storage MENU: ", profilePic )
        // console.log(localStorage.getItem('photo'))

        // this.props.decodeToken(localStorage.getItem('token'))
        // localStorage.removeItem('token')
        return (
            <div>
                <Navbar bg="light" variant="light" collapseOnSelect expand="md">
                    <Navbar.Brand className="menu-brand">
                        <img
                            className="rounded-circle profile-pic-menu"
                            src={profilePic}
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

// export default Menu;
const mapStateToProps = (state) => {
    // console.log("state")
    // console.log(state)
    return {
        token: state.accountReducer,
    };
};

export default connect(mapStateToProps, actions)(Menu);
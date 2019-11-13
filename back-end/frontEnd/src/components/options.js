import React from 'react';
import { Navbar, Nav, Form, NavDropdown, Button, FormControl } from 'react-bootstrap'
import '../App.css';

class Options extends React.Component {

    render() {
        return (
            <div className="App-Options">

                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Actions" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ADD CITY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">DELETED CITY</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">ACTION 3</NavDropdown.Item> */}
                                
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }

}

export default Options;
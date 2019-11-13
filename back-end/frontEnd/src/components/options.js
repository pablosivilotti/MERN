import React from 'react';
// import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import '../App.css';

class Options extends React.Component {



    onChange2 = name => event => {
        let value_ = name === 'image'
            ? event.target.files[0]
            : event.target.value

        this.setState({ [name]: value_ })

    }

    render() {
        return (
            <div className="App-Options">
                {/* 
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="mr-auto">
                            <NavDropdown title="Actions" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ADD CITY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">DELETED CITY</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">ACTION 3</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                        
                        <Form inline>
                            <FormControl type="text" placeholder="Search city" className="mr-sm-2"  />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar> */}

                <form className="form-inline search" onSubmit={(e) => { e.preventDefault() }}>
                    <input id="buscaCiudades" className="form-control mr-sm-2" type="search" placeholder="Search cities" aria-label="Search" onChange={this.onChange2('nombre')} />
                    {/* <input type="submit" onClick={() => { this.submitForm() }}></input> */}
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={() => { /*this.submitForm()*/ }}>Search</button>
                </form>

               

            </div>
        );
    }

}

export default Options;
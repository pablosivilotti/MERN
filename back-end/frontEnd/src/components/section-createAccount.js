import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



class SectionCreateAccount extends React.Component {
    render() {
        return (
            <div className="Section-CreateAccount">
                {/* <form>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name </label>
                        <div className="col-sm-10">
                        <input type="name" className="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputUser" className="col-sm-2 col-form-label">User</label>
                        <div className="col-sm-10">
                        <input type="user" className="form-control" id="inputUser" placeholder="User" />
                        </div>
                    </div>
                  
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </div>
                    </form> */}
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );

    }
}

export default SectionCreateAccount;
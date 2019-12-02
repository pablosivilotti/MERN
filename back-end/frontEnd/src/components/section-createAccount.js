import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from "axios";



class SectionCreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: false,
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: ""

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleForm(e) {
        if (
            !this.state.terms ||
            this.state.username === "" ||
            this.state.password === "" ||
            this.state.email === "" ||
            this.state.firstName === "" ||
            this.state.lastName === ""
        ) {
            e.preventDefault()
        }
        e.preventDefault();


        axios.get('http://localhost:5000/cuentas')
            .then((res) => {
                console.log(res)
            })
    }

    render() {

        return (
            <div className="Section-CreateAccount">

                <h4>Create Account</h4>

                <Link to="#" className="AddPhotoCirc">
                    Add Photo
                </Link>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>España</option>
                                <option>Belgica</option>
                                <option>Suiza</option>
                                <option>Dinamarca</option>
                                <option>Alemania</option>
                                <option>Irlanda</option>
                                <option>USA</option>
                                <option>Japon</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="I agree to MYtinerary's"
                            checked={this.state.terms}
                            onChange={this.handleInputChange}
                        />
                        <Link to="#">
                            Terms & Conditions
                        </Link>
                    </Form.Group>

                    <Button variant="outline-secondary" type="submit">
                        OK
                    </Button>
                </Form>
            </div>
        );

    }
}

export default SectionCreateAccount;
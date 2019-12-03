import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { addAccount } from "../redux/actions/accountActions";


class SectionCreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            terms: false,
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            photo: ""

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
        // console.log(this.state)
    }

    handleForm(e) {
        if (
            !this.state.terms ||
            this.state.username === "" ||
            this.state.password === "" ||
            this.state.email === "" ||
            this.state.firstName === "" ||
            this.state.lastName === "" ||
            this.state.photo === ""
        ) {
            e.preventDefault()
        }
        e.preventDefault();

        this.props.addAccount(this.state)

 
    }

    render() {

        return (
            <div className="Section-CreateAccount">

                <h4>Create Account</h4>

                <Link to="#" className="AddPhotoCirc" >
                    Add Photo
                </Link>
                <Form onSubmit={(e) => { this.handleForm(e) }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                required name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required name="password"
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
                            required name="email"
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
                                required name="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                required name="lastName"
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
                            required name="terms"
                            label="I agree to MYtinerary's"
                            checked={this.state.terms}
                            onChange={this.handleInputChange}
                        />
                        <Link to="#">
                            Terms & Conditions
                        </Link>
                    </Form.Group>
                    {/* <Link to="/login"> */}
                    <Button variant="outline-secondary" type="submit">
                        OK
                    </Button>
                    {/* </Link> */}
                </Form>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    // console.log("state")
    // console.log(state)
    return {
      accounts: state.accountReducer,
    };
  };

// export default SectionCreateAccount;
export default connect(mapStateToProps, { addAccount })(SectionCreateAccount);

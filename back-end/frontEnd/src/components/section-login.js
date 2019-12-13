import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// const config = require("../../../config/config")
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../redux/actions/accountActions";
// import {login} from "../redux/actions/accountActions";
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router-dom'
const jwtDecode = require('jwt-decode');


const initialState = {
    remember: false,
    email: "",
    password: "",
};


class SectionLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(res) {
        console.log("Response Google");
        console.log(res);

        this.props.loginGoogle(res.accessToken)
        this.props.loginGoogle()

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
            !this.state.remember ||
            this.state.email === "" ||
            this.state.password === ""

        ) {
            e.preventDefault()
        }
        e.preventDefault();
        // console.log("this.state")
        // console.log(this.state)
        this.props.login(this.state)
        this.props.currentUser()
        this.setState(initialState)
        
    }


    render() {

        // console.log("this.props RENDER")
        // console.log(this.props.token[0])

        if(this.props.token[0] && new Date(jwtDecode(this.props.token[0]).exp*1000).toLocaleString("es-AR")> new Date().toLocaleString("es-AR") )   return (<Redirect to='/' />)

        return (
            
            <div className="Section-Login">

                <h4>Login</h4>

                <Form onSubmit={(e) => { this.handleForm(e) }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>  Username  </Form.Label>
                        <Form.Control
                            type="email"
                            required
                            name="email"
                            placeholder="username"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            name="remember"
                            checked={this.state.remember}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        OK
                    </Button>
                </Form>

                <br />
                <p>
                    Don't have a MYtinerary account yet?
                    You should create one! It's totally free and only takes  a minute
                </p>

                <Link to={'/createAccount'}  >
                    Create Account
                </Link>
                <br/><br/>
                <GoogleLogin
                    clientId="971727407159-8cmaolsh9memlfkb3ped2duihqsa80g1.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    // console.log("state")
    // console.log(state)
    return {
        token: state.accountReducer,
    };
};

export default connect(mapStateToProps, actions )(SectionLogin);

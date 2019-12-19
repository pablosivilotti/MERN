import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// const config = require("../../../config/config")
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../redux/actions/accountActions";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Redirect } from 'react-router-dom'
import urlServer from '../components/constans'
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
        this.props.login(this.state)

        this.setState(initialState)
        
    }


    render() {
      
        if(this.props.token[0])
        if(this.props.token[0].token && new Date(jwtDecode(this.props.token[0].token).exp*1000).toLocaleString("es-AR")> new Date().toLocaleString("es-AR") )   return (<Redirect to={`/profile/${this.props.token[0].token}`} />)

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

                <GoogleLoginButton onClick={() => window.location=`${urlServer.urlServer}/loginGoogle`} />
                
            </div>
        );

    }
}

const mapStateToProps = (state) => {
     return {
        token: state.accountReducer,
      };
};

export default connect(mapStateToProps, actions )(SectionLogin);

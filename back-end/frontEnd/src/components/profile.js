import React from 'react';
// import {Link} from 'react-router-dom'
import '../App.css';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import { connect } from "react-redux";
import * as actions from "../redux/actions/accountActions";
import { Redirect } from 'react-router-dom'


const jwtDecode = require('jwt-decode');


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        // this.decodeToken(this.props.match.params.token)
        var token = this.props.match.params.token
        // console.log("TOKEN PROFILE")
        // console.log(this.props.match.params.token)
        this.props.storeTokenDecode(token, jwtDecode(token))
    }

//     decodeToken(token) {
//         localStorage.setItem("token", token);
// //crear un objeto USUARIO CON LOS DATOS DE USERNAME, EMAIL, FOTO Y LO GUARDO EN LOCAL STORAGE PARA DESPUES MOSTRAR DESDE CADA COMPONENTE
//         this.setState(jwtDecode(token))

//     }

    render() {
        // localStorage.removeItem("username");
        // localStorage.removeItem("email");
        // localStorage.removeItem("photo");
        // console.log("this ")
        // console.log(this)

        return (
            <div className="profile">
                <Menu />
                <Header />

                <h1>Bienvenido</h1>
                <h4>{localStorage.getItem('email')}</h4>
                <img src={localStorage.getItem('photo')} className="rounded-circle" width="50%" alt="createAccountPhoto" />
                
                <Footer />
                <Redirect to={`/`} />
            </div>


        );
    }

}

const mapStateToProps = (state) => {
    // console.log("state")
    // console.log(state)
    return {
        tokenReducer: state.accountReducer,
    };
};

export default connect(mapStateToProps, actions )(Profile);

// export default Profile;
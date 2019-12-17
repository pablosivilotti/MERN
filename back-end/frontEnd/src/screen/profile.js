import React from 'react';
// import {Link} from 'react-router-dom'
import '../App.css';
import Footer from '../components/footer';
const jwtDecode = require('jwt-decode');


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.decodeToken(this.props.match.params.token)
    }

    decodeToken(token) {
        localStorage.setItem("token", token);
//crear un objeto USUARIO CON LOS DATOS DE USERNAME, EMAIL, FOTO Y LO GUARDO EN LOCAL STORAGE PARA DESPUES MOSTRAR DESDE CADA COMPONENTE
        this.setState(jwtDecode(token))

    }

    render() {
        console.log("this")
        console.log(this.state)
        return (
            <div className="profile">
                <h1>Bienvenido a MYtinerary</h1>
                <h2>{this.state.username}</h2>
                <img src={this.state.photo} className="rounded-circle" width="50%" alt="createAccountPhoto" />
                <Footer />
            </div>


        );
    }

}

export default Profile;
import React from 'react';
// import {Link} from 'react-router-dom'
import '../App.css';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
// import { connect } from "react-redux";
// import * as actions from "../redux/actions/accountActions";
import { Redirect } from 'react-router-dom'


// const jwtDecode = require('jwt-decode');


class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    // componentDidMount() {
        
    // }

    render() {
        localStorage.clear();

        return (
            <div className="Logout">
                <Menu />
                <Header />

                <h1>Hasta luego!</h1>
                {/* <h4>{localStorage.getItem('email')}</h4>
                <img src={localStorage.getItem('photo')} className="rounded-circle" width="50%" alt="createAccountPhoto" />
                 */}
                <Footer />
                <Redirect to={`/`} />
            </div>


        );
    }

}

// const mapStateToProps = (state) => {
//     // console.log("state")
//     // console.log(state)
//     return {
//         accountReducer: state.accountReducer,
//     };
// };

// export default connect(mapStateToProps, actions )(Logout);

export default Logout;
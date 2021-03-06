import React from 'react';
import { Link } from 'react-router-dom'
import logo from './circled-right-2.png';
import '../App.css';
// import '../client/client'


class Section extends React.Component {
    render() {
            // console.log("token local storage HOME")
            // console.log(localStorage.getItem('token'))
        return (
            <div className="Section">
               
                <p>
                    Find you perfect trip, designed by insiders who know and love their cities.
                </p>
                <h2>
                    Start Browsing
                </h2>
                <Link to={'./list-cities'}  >
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </div>
        );

    }
}

export default Section;
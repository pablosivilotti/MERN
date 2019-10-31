import React from 'react';
import MYtineraryLogo from './MYtineraryLogo.png';
import '../App.css';


class Header extends React.Component{

    render() {
        return(
            <img src={MYtineraryLogo} className="App-title" alt="MYtineraryLogo" />
        );

    }
}


export default Header;
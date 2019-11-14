import React from 'react';
// import { Navbar, Form, Button, FormControl } from 'react-bootstrap'
import '../App.css';

class Options extends React.Component {

    render() {

        return (
            <div className="Search-Cities">
               
                <form className="form-inline search" >
                    <input id="buscaCiudades" className="form-control mr-sm-2" type="search" placeholder="Search cities" aria-label="Search" /*value={this.state.filterC} onChange2={console.log(this.state.filterC)}*/ />
                </form>

            </div>
        );
    }

}

export default Options;
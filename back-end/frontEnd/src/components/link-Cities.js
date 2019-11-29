import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


class LinkCities extends React.Component {

    render() {
        return (
            <div>
                <Link to={'/list-cities'}  >
                    Choose another city
                </Link>
            </div>
        );
    }

}

export default LinkCities;
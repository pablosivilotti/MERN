import React from 'react';
import {Link} from 'react-router-dom'
import homeIcon from './homeIcon.png';
import '../App.css';


class Footer extends React.Component{

    render(){
        return(
                <div>
                    <Link to={'/'}> 
                        <img src={homeIcon} className="img-Home" alt="homeIcon" /> 
                    </Link>
                </div>
        );
    }
    
}

export default Footer;
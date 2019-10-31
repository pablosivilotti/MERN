import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';

class Links extends React.Component{

    render(){
        return(
          <div className="App-links">
              <p>
                Want to build you own MYtinerary?
              </p>

              <div className="textLeft App-login">
                <Link to={'./login'}> Log in </Link>
              </div> 

              <div className="textRight App-createAccount">
                <Link to={'./createAccount'}>Create Account</Link>
              </div>
           </div>
        );
    }

}

export default Links;
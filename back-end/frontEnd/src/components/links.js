import React from 'react';
import {Link} from 'react-router-dom'
import urlServer from '../components/constans'
import '../App.css';

class Links extends React.Component{

  
  render(){
    // console.log("localStorage.getItem('token') LINKSS")
    // console.log(localStorage.getItem('token'))

    if(localStorage.getItem('token')) return  <Link to={'./logout'}>
                                                  <img src={`${urlServer.urlServer}/city/image/logout.jpg`} width="25%" alt="logout" />
                                              </Link>
    
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
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './screen/home';
import Login from './screen/login';
import CreateAccount from './screen/crateAccount';
import Cities from './screen/cities';
import CitiesBD from './screen/cities-bd'


function App() {
  return (

    <div className="App">

    <Router >

    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/createAccount' component={CreateAccount} />
    <Route path='/cities' component={Cities} />
    <Route path='/cities-bd' component={CitiesBD} />

    </Router >

    </div>
  );
}

 export default App;

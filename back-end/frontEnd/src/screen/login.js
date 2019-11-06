import React from 'react';
import Header from '../components/header';
// import Section from './components/section';
// import Links from '../components/links';
import Footer from '../components/footer';
import SectionLogin from '../components/section-login';


function Login() {
  return (

    <div className="Login">

      <Header />
      <SectionLogin />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

 export default Login;

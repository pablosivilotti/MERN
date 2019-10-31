import React from 'react';
import Header from '../components/header';
// import Section from './components/section';
// import Links from '../components/links';
import Footer from '../components/footer';
import SectionCreateAccount from '../components/section-createAccount';


function CreateAccount() {
  return (

    <div className="CreateAccount">

      <Header />
      <SectionCreateAccount />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

 export default CreateAccount;

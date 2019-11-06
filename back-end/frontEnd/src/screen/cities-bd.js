import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BackEndClient from '../client/client'


function CitiesBD() {
  return (

    <div className="CitiesBD">

      <Header />
      <BackEndClient />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

 export default CitiesBD;

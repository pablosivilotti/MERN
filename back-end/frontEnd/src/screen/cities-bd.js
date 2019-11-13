import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
// import BackEndClient from '../client/client'
import HelloRedux from '../redux/components/CitiesRedux'


function CitiesBD() {
  return (

    <div className="CitiesBD">

      <Header />
      {/* <BackEndClient /> */}
      <HelloRedux />
      {/* <Links /> */}
      <Footer />


    </div>
  );
}

 export default CitiesBD;

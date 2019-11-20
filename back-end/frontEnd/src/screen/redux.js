import React from 'react';
import Header from '../components/header';
import CitiesRedux from '../redux/components/CitiesRedux'
import Footer from '../components/footer';


function Redux() {
  return (

    <div className="Redux">

      <Header />
      {/* <Section />
      <Links /> */}
      <CitiesRedux />
      <Footer />


    </div>
  );
}

 export default Redux;
